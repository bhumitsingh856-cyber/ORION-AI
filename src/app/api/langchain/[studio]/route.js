import { NextResponse } from "next/server";
import { GenAI } from "@/services/Gen AI/core";
import chat from "@/lib/models/chat";
export async function POST(req, { params }) {
  const { prompt } = await req.json();
  const { studio } = await params;
  try {
    const getchat = await chat.findById(studio);
    if (!getchat) return;
    if (getchat.tittle === "Untitled Conversation") {
      getchat.tittle = prompt;
    }

    const history = await chat
      .findById(studio)
      .select({ messages: { $slice: -16 } });
    const res = await GenAI(prompt, history.messages);

    const regex = /(https?:\/\/res\.cloudinary\.com[^\s]+)/g;

    let imageurl = res.match(regex)?.[0] ?? "";

    await getchat.messages.push({ role: "user", content: prompt });
    await getchat.save();
    const res2 = await getchat.messages.push({
      role: "assistant",
      content: res,
      image: imageurl,
    });
    await getchat.save();
    imageurl = "";
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
