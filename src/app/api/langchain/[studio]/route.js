import { NextResponse } from "next/server";
import { GenAI } from "@/services/Gen AI/core";
import chat from "@/lib/models/chat";
import rag from "@/services/Gen AI/rag";
import connectDB from "@/lib/db";
export async function POST(req, { params }) {
  await connectDB(); 
  const { prompt, doc } = await req.json();
  const { studio } = await params;

  // Initializing variables for user image and document
  let userImage = "";
  let document = { url: "", name: "", public_id: "" };
  console.log("doc", doc);

  // Check for docs
  if (doc) {
    // Check if doc is image
    if (
      doc.url.endsWith(".png") ||
      doc.url.endsWith(".jpg") ||
      doc.url.endsWith(".jpeg")
    ) {
      userImage = doc.url;
    }
    // Check if doc is pdf or doc
    else {
      document = {
        url: doc.url,
        name: doc.name,
        public_id: doc.public_id.replace(".", ""),
      };

      await rag(document.url, document.public_id);
    }
  }

  // fetching chat from db

  try {
    const getchat = await chat.findById(studio);
    if (!getchat) return;
    if (getchat.tittle === "Untitled Conversation") {
      getchat.tittle = prompt;
    }
    // fetching last 16 messages from db
    const history = await chat
      .findById(studio)
      .select({ messages: { $slice: -16 } });

    // GenAI response
    let isDoc = "";
    if (userImage.length > 0) {
      isDoc = `Image : ${userImage}`;
    } else if (document.public_id.length > 0) {
      isDoc = `Document id to retrieve data : ${document.public_id}`;
    }
    const newPrompt = `${prompt} ${isDoc}`;
    const res = await GenAI(newPrompt, history.messages);

    // Extracting image url from response
    const regex = /(https?:\/\/res\.cloudinary\.com[^\s]+)/g;
    let imageurl = res.match(regex)?.[0] ?? "";

    // Adding user message in db
    await getchat.messages.push({
      role: "user",
      content: prompt,
      image: userImage,
      doc: document,
    });
    await getchat.save();
    // Adding assistant message in db
    await getchat.messages.push({
      role: "assistant",
      content: res,
      image: imageurl,
    });
    await getchat.save();
    // Resetting image url
    imageurl = "";
    document = { url: "", name: "", public_id: "" };
    // Returning response to client
    return NextResponse.json({
      role: "assistant",
      content: res,
      image: imageurl,
    });
  } catch (e) {
    console.log("Error in route", e);
    return NextResponse.json({
      role: "assistant",
      content: "Something went wrong",
    });
  }
}
