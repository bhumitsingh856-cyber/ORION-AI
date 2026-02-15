"use client";
import { useRef, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { X } from "lucide-react";
import handleToggle from "@/utils/haptics";
import { usestudioStore } from "@/store/zustand";
import { useParams } from "next/navigation";
import getChat from "@/actions/getChat.action";

const Chat = () => {
  // hooks
  const ref = useRef(null);
  const {studio}=useParams();
  const chatHistory=[];
  const [doc, setDoc] = useState(null);
  console.log(studio)

  // zustand store
  const prompt=usestudioStore((state) => (state.prompt));
  const setPrompt=usestudioStore((state) => (state.setPrompt));
  const chat=usestudioStore((state) => (state.chat));
  const setChat=usestudioStore((state) => (state.setChat));

  // functions
  const scrollToBottom = () => {
    if (typeof window !== "undefined" && ref.current) {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const loadChat=async()=>{
    const res=await getChat(studio);
    console.log("chat",res)
    if(res.success){
      setChat(res.chat);
    }
  }

  // Effects
  useEffect(()=>{
    loadChat();
  },[studio])

  useEffect(() => {
    scrollToBottom();
  }, [chat,studio]);
  return (
    <div className="flex flex-col justify-between h-screen">
      <main className="flex-1 overflow-y-auto p-2 flex flex-col gap-2">
        {chat.length === 0 && (
          <div className="flex justify-center flex-col gap-8 text-center items-center h-screen">
            {/* Animated Orion Logo */}
            <div className="relative">
              {/* The Main AI SVG */}
              <svg
                viewBox="0 0 100 100"
                className="relative w-20 h-20 drop-shadow-2xl"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="aiGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#c084fc" /> {/* Purple-400 */}
                    <stop offset="100%" stopColor="#22d3ee" /> {/* Cyan-400 */}
                  </linearGradient>

                  <filter id="innerGlow">
                    <feFlood
                      floodColor="white"
                      floodOpacity="0.5"
                      result="flood"
                    />
                    <feComposite
                      in="flood"
                      result="mask"
                      in2="SourceGraphic"
                      operator="in"
                    />
                    <feGaussianBlur stdDeviation="1" result="blur" />
                    <feComposite
                      in="SourceGraphic"
                      in2="blur"
                      operator="over"
                    />
                  </filter>
                </defs>

                {/* Outer Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#aiGradient)"
                  strokeWidth="2"
                  strokeDasharray="15 10"
                  className="animate-[spin_10s_linear_infinite]"
                />

                {/* Inner Core Shapes */}
                <path
                  d="M50 25C36.1929 25 25 36.1929 25 50C25 63.8071 36.1929 75 50 75C63.8071 75 75 63.8071 75 50C75 36.1929 63.8071 25 50 25Z"
                  fill="url(#aiGradient)"
                  filter="url(#innerGlow)"
                  className="animate-pulse"
                />

                {/* Center Star/Spark */}
                <path
                  d="M50 40L53 47L60 50L53 53L50 60L47 53L40 50L47 47L50 40Z"
                  fill="white"
                  className="animate-bounce"
                />
              </svg>
              {/* Floating particles */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping [animation-delay:0.5s]"></div>
              <div className="absolute top-1/2 -right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping [animation-delay:1s]"></div>
            </div>

            {/* Welcome Message */}
            <div className="space-y-4 max-w-2xl px-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ready for Magic ?
                </span>
              </h2>
              <p className="text-lg text-gray-400">
                Ask me anything, and I'll help you find answers, generate
                content, or solve problems.
              </p>
            </div>

            {/* Suggestion Prompts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl px-4">
              <button className="text-left p-4 cursor-pointer bg-gradient-to-br from-stone-800/40 to-stone-800/20 hover:from-blue-500/20 hover:to-purple-500/20 border border-stone-700/50 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                <div className="flex items-start gap-3">
                  <div className="text-2xl hover:scale-110 transition-transform">
                    💡
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-200 mb-1">
                      Explain a concept
                    </p>
                    <p className="text-xs text-gray-500">
                      Break down complex topics
                    </p>
                  </div>
                </div>
              </button>
              <button className="text-left p-4 cursor-pointer bg-gradient-to-br from-stone-800/40 to-stone-800/20 hover:from-blue-500/20 hover:to-purple-500/20 border border-stone-700/50 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                <div className="flex items-start gap-3">
                  <div className="text-2xl hover:scale-110 transition-transform">
                    ✍️
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-200 mb-1">
                      Write content
                    </p>
                    <p className="text-xs text-gray-500">
                      Create articles, emails, or posts
                    </p>
                  </div>
                </div>
              </button>

              <button className="text-left p-4 cursor-pointer bg-gradient-to-br from-stone-800/40 to-stone-800/20 hover:from-blue-500/20 hover:to-purple-500/20 border border-stone-700/50 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                <div className="flex items-start gap-3">
                  <div className="text-2xl hover:scale-110 transition-transform">
                    💻
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-200 mb-1">
                      Help with code
                    </p>
                    <p className="text-xs text-gray-500">
                      Debug, optimize, or explain code
                    </p>
                  </div>
                </div>
              </button>

              <button className="text-left p-4 cursor-pointer bg-gradient-to-br from-stone-800/40 to-stone-800/20 hover:from-blue-500/20 hover:to-purple-500/20 border border-stone-700/50 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                <div className="flex items-start gap-3">
                  <div className="text-2xl hover:scale-110 transition-transform">
                    🔍
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-200 mb-1">
                      Research topics
                    </p>
                    <p className="text-xs text-gray-500">
                      Find information and insights
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Helper Text */}
            <p className="text-sm text-gray-600 mt-4">
              Just type your question below to get started
            </p>
          </div>
        )}
        {chat?.length > 0 &&
          chat?.map((e) =>
            e.role === "user" ? (
              <div key={e._id} className="flex justify-end ">
                <span className="bg-linear-to-r from-sky-500/20  to-purple-500/20 via-transparent   max-w-2xs  sm:max-w-4xl p-4 rounded-br-4xl rounded-l-2xl">
                  {e.content}
                </span>
              </div>
            ) : (
              <div
                key={e._id}
                className=" max-w-4xl p-4 rounded-xl bg-black/30 rounded-bl-4xl rounded-r-2xl"
              >
                <div className="flex gap-2 items-center mb-2">
                  <span className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg h-7 w-7 p-4 flex justify-center items-center text-xl font-bold">
                    O
                  </span>
                  <span className="font-bold">ORION</span>
                </div>
                <span>{e.content}</span>
                {e.image && (
                  <div>
                    <img
                      className="rounded-lg max-w-3xl w-full"
                      src={e.image}
                      alt=""
                    />
                  </div>
                )}
              </div>
            ),
          )}
        <div ref={ref}></div>
      </main>
      <footer className="sticky bg-black p-2 bottom-0">
        {doc && (
          <div className="flex max-w-xs w-fit duration-300 relative items-center gap-2 p-2 bg-zinc-700/50 rounded-lg  m-4">
            <span className="text-2xl">📄</span>
            <span className="line-clamp-1">{doc.name.split(".")[0]}</span>
            <span>.{doc.name.split(".")[1]}</span>
            <div>
              <X
                onClick={() => setDoc(null)}
                className="bg-linear-to-r from-red-500 to-orange-600 rounded-[3px] hover:shadow-[0_0_20px_red]  hover:rounded-2xl hover:rotate-180 hover:scale-110 duration-300 hover:bg-zinc-600"
              ></X>
            </div>
          </div>
        )}
        <div className="flex items-center relative md:gap-2 gap-1  md:mx-4 mx-2">
          <input
            onClick={handleToggle}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full hover:scale-101 focus:border-sky-500 hover:shadow-[0_0_10px_gray] bg-stone-800/50 p-2 md:p-4 md:py-4 py-2 border-2 border-blue-500/30 duration-300 outline-none rounded-full "
            type="text"
            placeholder="Ask Orion"
          />
          <label className="relative bg-linear-to-r cursor-pointer shrink-0 hover:border-green-400 hover:shadow-[0_0_30px_green] hover:scale-105 duration-300 font-bold flex group from-green-800 border-2 to-teal-500 rounded-full p-2 overflow-hidden md:p-4">
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
            <input
              type="file"
              onClick={handleToggle}
              onChange={(e) => setDoc(e.target.files[0])}
              className="hidden"
              accept="image/*, .pdf, .txt, .doc, .docx"
            />
          </label>
          <button className="bg-linear-to-r relative cursor:pointer shrink-0 hover:shadow-[0_0_30px_blue]  hover:border-blue-500 font-bold flex hover:scale-105 duration-300 group overflow-hidden from-blue-600 border-2 to-sky-500 rounded-full  p-2 md:p-4">
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
