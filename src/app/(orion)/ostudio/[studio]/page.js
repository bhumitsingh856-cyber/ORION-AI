"use client";
import { useRef, useEffect, useState, memo } from "react";
import { useUser } from "@clerk/nextjs";
import IntentLoadingState from "@/components/Loadingresponse";
import { X } from "lucide-react";
import handleToggle from "@/utils/haptics";
import { usestudioStore } from "@/store/zustand";
import { useParams } from "next/navigation";
import axios from "axios";
import getChat from "@/actions/getChat.action";
import { getindent } from "@/actions/indent.action.js";
import Formatedllmresponse from "@/components/Formatedllmresponse";
import EmptyChat from "@/components/EmptyChat";
import { getRandom } from "@/utils/randomline";
import Image from "next/image";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import "dotenv/config";
const Chat = () => {
  // hooks
  const ref = useRef(null);
  const { studio } = useParams();
  const [doc, setDoc] = useState(null);
  const { user } = useUser();
  const [indent, setIndent] = useState("");
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  // zustand store
  const chat = usestudioStore((state) => state.chat);
  const setChat = usestudioStore((state) => state.setChat);
  const addchat = usestudioStore((state) => state.addChat);

  // functions
  const appendusermessage = () => {
    addchat({ role: "user", content: prompt, image: doc?.url ?? "" });
  };
  const scrollToBottom = () => {
    if (typeof window !== "undefined" && ref.current) {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const loadChat = async () => {
    const res = await getChat(studio);
    console.log("chat", res);
    if (res.success) {
      setChat(res.chat);
    }
  };

  const appendaimsg = async () => {
    const promptIndent = await getindent(prompt);
    console.log("Indent", promptIndent);
    setIndent(promptIndent);
    try {
      const res = await axios.post(`/api/langchain/${studio}`, {
        prompt: prompt.trim(),
        doc: doc,
      });
      addchat(res.data);
      setLoading(false);
      setIndent("");
    } catch (e) {
      console.log("Error in appendaimsg", e.message);
    }
  };
  // Effects
  useEffect(() => {
    loadChat();
  }, [studio]);

  useEffect(() => {
    scrollToBottom();
  }, [chat, studio]);
  return (
    <div className="flex flex-col justify-between h-screen">
      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-2 flex flex-col gap-4">
        {chat.length === 0 ? (
          <EmptyChat></EmptyChat>
        ) : (
          <h1 className="w-fit mx-auto text-3xl font-bold bg-linear-to-b from-white to-neutral-500 bg-clip-text text-transparent tracking-tight">
            {getRandom([
              "Orion is listening",
              "The core is active",
              "Consciousness initiated",
              "Processing the infinite",
            ])}
          </h1>
        )}

        {/* Chat messagss */}
        {chat?.length > 0 &&
          chat?.map((e, idx) =>
            e.role === "user" ? (
              <div key={idx} className="flex gap-2 justify-end ">
                <span className="bg-linear-to-r from-slate-700 to-slate-800 border wrap-break-word border-slate-600/50 max-w-2xs  sm:max-w-4xl p-3 px-4 rounded-br-2xl rounded-l-2xl">
                  {e.content}
                  {e.image && e.image.length > 0 && (
                    <Image
                      className="rounded-lg mt-4"
                      alt="user uploaded image"
                      src={e?.image}
                      width={500}
                      height={300}
                    ></Image>
                  )}
                </span>
                <span>
                  <img
                    className="md:w-10 md:h-10 h-8 w-8 border-2 border-white/70 rounded-full"
                    src={user?.imageUrl}
                    alt=""
                  />
                </span>
              </div>
            ) : (
              <div
                key={idx}
                className=" p-2 rounded-xl bg-black/30 rounded-bl-2xl rounded-r-2xl"
              >
                <div className="flex gap-2 items-center mb-4">
                  <span className="bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg h-7 w-7 p-4 flex justify-center items-center text-xl font-bold">
                    O
                  </span>
                  <span className="font-bold">ORION AI</span>
                </div>
                <div >
                  <Formatedllmresponse
                    content={e.content}
                  ></Formatedllmresponse>
                </div>
              </div>
            ),
          )}
        {loading && <IntentLoadingState loadingType={indent} />}
        <div ref={ref}></div>
      </main>
      <div className="bg-linear-to-r from-transparent via-gray-600 to-transparent h-[1px]"></div>

      {/* footer */}
      <footer className="sticky bg-black p-2 bottom-0">
        {doc?.url && (
          <div className="flex max-w-xs w-fit duration-300 relative items-center gap-2 p-2 bg-zinc-700/50 rounded-lg  m-4">
            {doc?.type == "image" ? (
              <div>
                <CldImage
                  className="rounded-lg"
                  src={doc.public_id}
                  alt={doc.name}
                  width={100}
                  height={100}
                />
                <span className="line-clamp-1">{doc.name}</span>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <span className="text-2xl">📄</span>
                <span className="line-clamp-1">{doc.name}</span>
              </div>
            )}
            <div>
              <X
                onClick={() => {
                  setDoc(null);
                  handleToggle();
                }}
                className="bg-linear-to-r from-red-500 to-orange-600 rounded-[3px] hover:shadow-[0_0_20px_red]  hover:rounded-2xl hover:rotate-180 hover:scale-110 duration-300 hover:bg-zinc-600"
              ></X>
            </div>
          </div>
        )}
        <div className="flex items-center w-full relative md:gap-2 gap-1  ">
          <textarea
            onClick={() => {
              handleToggle();
            }}
            value={prompt}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                appendusermessage();
                appendaimsg();
                setPrompt("");
                setLoading(true);
              }
            }}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full break-all resize-none  field-sizing-content  max-h-52 focus:border-sky-500 hover:shadow-[0_0_10px_gray] focus:shadow-[0_0_10px_blue_inset] bg-stone-800/50 p-2 md:p-4 md:py-4 py-2 border-2 border-blue-500/30 duration-300 outline-none rounded-2xl"
            placeholder="Ask Orion anything..."
          ></textarea>
          {console.log(doc)}
          {/* uplaods */}
          <label className="relative bg-linear-to-r cursor-pointer shrink-0 hover:border-green-400  hover:shadow-[0_0_30px_green] hover:scale-105 duration-300 font-bold flex group from-green-800 border-2 to-teal-500 rounded-full p-2 overflow-hidden md:p-4">
            <div className="absolute duration-300 translate-x-[-100%] group-hover:translate-x-[100%] top-0 left-0 inset-0 bg-linear-to-r from-transparent via-white to-transparent"></div>
            <span className="hover:scale-105 duration-500 hover:-translate-y-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15V3M12 3L8 7M12 3L16 7M2 17L2.621 19.485C2.84491 20.3806 3.64781 21 4.569 21H19.431C20.3522 21 21.1551 20.3806 21.379 19.485L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <CldUploadWidget
              uploadPreset="orion_studio"
              options={{
                multiple: false,
                resourceType: "auto",
                singleUploadAutoClose: false,
                clientAllowedFormats: [
                  "jpg",
                  "jpeg",
                  "png",
                  "pdf",
                  "doc",
                  "docx",
                ],
              }}
              onSuccess={(result) => {
                // console.log(result);
                setDoc({
                  name: result.info.original_filename,
                  type: result.info.resource_type,
                  url: result.info.secure_url,
                  public_id: result.info.public_id,
                });
                handleToggle();
              }}
            >
              {({ open }) => <button onClick={() => open()}></button>}
            </CldUploadWidget>
            {/* <input
                type="file"
                onClick={handleToggle}
                onChange={(e) => setDoc(e.target.files[0])}
                className="hidden"
                accept="image/*, .pdf, .txt, .doc, .docx"
              /> */}
          </label>

          <button
            disabled={loading || prompt.trim().length === 0}
            onClick={() => {
              appendusermessage();
              appendaimsg();
              setPrompt("");
              setDoc(null);
              setLoading(true);
              console.log("loading", prompt);
            }}
            className={`${prompt.trim().length === 0 ? "cursor-not-allowed" : "cursor-pointer"} bg-linear-to-r relative  shrink-0 hover:shadow-[0_0_30px_blue]  hover:border-blue-500 font-bold flex hover:scale-105 duration-300 group overflow-hidden from-blue-600 border-2 to-sky-500 rounded-full  p-2 md:p-4`}
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover:translate-x-[100%] duration-500"></div>
            <span className="hover:scale-110 duration-300">Ask</span>
            <span className="hover:translate-x-2 duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Chat;
