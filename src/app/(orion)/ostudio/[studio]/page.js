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
import { CldUploadWidget } from "next-cloudinary";

// ✅ Memoize message component to prevent re-renders
const UserMessage = memo(({ content, userImage }) => (
  <div className="flex gap-2 justify-end">
    <span className="bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600/50 max-w-2xs sm:max-w-4xl p-3 px-4 rounded-br-2xl rounded-l-2xl">
      {content}
    </span>
    <span>
      <img
        className="md:w-10 md:h-10 h-8 w-8 border-2 border-white/70 rounded-full"
        src={userImage}
        alt=""
      />
    </span>
  </div>
));

const AIMessage = memo(({ content }) => (
  <div className="max-w-4xl w-fit p-2 rounded-xl bg-black/30 rounded-bl-2xl rounded-r-2xl">
    <div className="flex gap-2 items-center mb-4">
      <span className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg h-7 w-7 p-4 flex justify-center items-center text-xl font-bold">
        O
      </span>
      <span className="font-bold">ORION AI</span>
    </div>
    <div>
      <Formatedllmresponse content={content} />
    </div>
  </div>
));

UserMessage.displayName = "UserMessage";
AIMessage.displayName = "AIMessage";

const Chat = () => {
  // hooks
  const ref = useRef(null);
  const inputRef = useRef(null); // ✅ Uncontrolled input
  const { studio } = useParams();
  const [doc, setDoc] = useState(null);
  const { user } = useUser();
  const [indent, setIndent] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Don't subscribe to chat in parent - only get the action
  const chat = usestudioStore((state) => state.chat);
  const setChat = usestudioStore((state) => state.setChat);
  const addchat = usestudioStore((state) => state.addChat);

  const scrollToBottom = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const loadChat = async () => {
    const res = await getChat(studio);
    if (res.success) {
      setChat(res.chat);
    }
  };

  const handleSend = async () => {
    const promptValue = inputRef.current.value.trim();
    
    if (!promptValue || loading) return;

    // Clear input immediately
    inputRef.current.value = "";

    // Add user message
    addchat({ role: "user", content: promptValue });
    setLoading(true);

    // Get intent
    const promptIndent = await getindent(promptValue);
    setIndent(promptIndent);

    try {
      const res = await axios.post(`/api/langchain/${studio}`, {
        prompt: promptValue,
      });
      addchat(res.data);
    } catch (e) {
      console.log("Error:", e.message);
    } finally {
      setLoading(false);
      setIndent("");
    }
  };

  // Effects
  useEffect(() => {
    loadChat();
  }, [studio]);

  useEffect(() => {
    scrollToBottom();
  }, [chat.length]); // ✅ Only on length change

  return (
    <div className="flex flex-col justify-between h-screen">
      <main className="flex-1 overflow-y-auto p-2 flex flex-col gap-4">
        {chat.length === 0 ? (
          <EmptyChat />
        ) : (
          <h1 className="w-fit mx-auto text-3xl font-bold bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent tracking-tight">
            {getRandom([
              "Orion is listening",
              "The core is active",
              "Consciousness initiated",
              "Processing the infinite",
            ])}
          </h1>
        )}
        
        {/* ✅ Memoized messages */}
        {chat.map((e, idx) =>
          e.role === "user" ? (
            <UserMessage key={idx} content={e.content} userImage={user?.imageUrl} />
          ) : (
            <AIMessage key={idx} content={e.content} />
          )
        )}

        {loading && <IntentLoadingState loadingType={indent} />}
        <div ref={ref}></div>
      </main>

      <div className="bg-gradient-to-r from-transparent via-gray-600 to-transparent h-[1px]"></div>

      <footer className="sticky bg-black p-2 bottom-0">
        {doc && (
          <div className="flex max-w-xs w-fit duration-300 relative items-center gap-2 p-2 bg-zinc-700/50 rounded-lg m-4">
            <span className="text-2xl">📄</span>
            <span className="line-clamp-1">{doc.name.split(".")[0]}</span>
            <span>.{doc.name.split(".")[1]}</span>
            <div>
              <X
                onClick={() => setDoc(null)}
                className="bg-gradient-to-r from-red-500 to-orange-600 rounded-[3px] hover:shadow-[0_0_20px_red] hover:rounded-2xl hover:rotate-180 hover:scale-110 duration-300 hover:bg-zinc-600"
              />
            </div>
          </div>
        )}

        <div className="flex items-center relative md:gap-2 gap-1 md:mx-4">
          {/* ✅ Uncontrolled input - no state updates */}
          <textarea
            ref={inputRef}
            onClick={handleToggle}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            className="w-full resize-none field-sizing-content max-h-60 focus:border-sky-500 bg-stone-800/50 p-2 md:p-4 md:py-4 py-2 border-2 border-blue-500/30 duration-300 outline-none rounded-2xl"
            placeholder="Ask Orion anything..."
            disabled={loading}
          />

          <label className="relative bg-gradient-to-r cursor-pointer shrink-0 hover:border-green-400 hover:shadow-[0_0_30px_green] hover:scale-105 duration-300 font-bold flex group from-green-800 border-2 to-teal-500 rounded-full p-2 overflow-hidden md:p-4">
            <div className="absolute duration-300 translate-x-[-100%] group-hover:translate-x-[100%] top-0 left-0 inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
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
              uploadPreset="orion_preset"
              onSuccess={(results) => {
                // Handle upload
              }}
              options={{
                sources: ["local", "url", "google_drive"],
                clientAllowedFormats: ["png", "pdf", "doc", "docx"],
                maxFiles: 1,
              }}
            >
              {({ open }) => (
                <button
                  type="button"
                  onClick={() => open()}
                  className="p-2 text-stone-400 hover:text-cyan-400 transition-colors"
                />
              )}
            </CldUploadWidget>
          </label>

          <button
            disabled={loading}
            onClick={handleSend}
            className="bg-gradient-to-r relative shrink-0 hover:shadow-[0_0_30px_blue] hover:border-blue-500 font-bold flex hover:scale-105 duration-300 group overflow-hidden from-blue-600 border-2 to-sky-500 rounded-full p-2 md:p-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover:translate-x-[100%] duration-500"></div>
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