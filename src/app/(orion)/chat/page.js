"use client";
import { useUser } from "@clerk/nextjs";
const Chat = () => {
  const { user } = useUser();
  const chatHistory = [
    // {
    //   id: 1,
    //   role: "user",
    //   content:
    //     "Hey Orion, can you help me explain Quantum Entanglement to a five-year-old?",
    //   timestamp: "10:00 AM",
    // },
    // {
    //   id: 2,
    //   role: "assistant",
    //   content:
    //     "Imagine you have two magic socks. If you put one on your left foot here in your room, the other sock—no matter where it is in the world—instantly knows it has to be a right-foot sock. They are 'connected' even if they are far apart!",
    //   timestamp: "10:00 AM",
    // },
    // {
    //   id: 3,
    //   role: "user",
    //   content:
    //     "That's cool! Can Imagine you have two magic socks. If you put one on your left foot here in your room, the other sock—no matter where it is in the world—instantly knows it has to be a right-foot sock. They are 'connected' even if they are far apart! you also generate a simple Python snippet to print 'Hello World'?",
    //   timestamp: "10:01 AM",
    // },
    // {
    //   id: 4,
    //   role: "assistant",
    //   content:
    //     "Of course! Here is the simplest way to do it:\n\n```python\nprint('Hello World')\n```bg-stone-600bg-stone-600bg-stone-600",
    //   timestamp: "10:01 AM",
    // },
  ];
  return (
    <div className="flex flex-col justify-between h-screen">
      <main className="flex-1 overflow-y-auto p-2 flex flex-col gap-2">
        <div>
          
        </div>
        {chatHistory.length > 0 &&
          chatHistory.map((e) =>
            e.role === "user" ? (
              <div key={e.id} className="flex justify-end ">
                <span className="bg-linear-to-r from-sky-500/20  to-purple-500/20 via-transparent   max-w-2xs  sm:max-w-4xl p-4 rounded-br-4xl rounded-l-2xl">
                  {e.content}
                </span>
              </div>
            ) : (
              <div
                key={e.id}
                className=" max-w-4xl p-4 rounded-xl bg-black/30 rounded-bl-4xl rounded-r-2xl"
              >
                <div className="flex gap-2 items-center mb-2">
                  <span className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg h-7 w-7 p-4 flex justify-center items-center text-xl font-bold">
                    O
                  </span>
                  <span className="font-bold">ORION</span>
                </div>
                <span>{e.content}</span>
              </div>
            ),
          )}
      </main>
      <footer className="sticky bg-black p-2 bottom-0">
        <div className="flex items-center relative md:gap-2 gap-1  md:mx-4 mx-2">
          <input
            className="w-full hover:scale-101 focus:border-sky-500 hover:shadow-[0_0_10px_gray] bg-stone-800/50 p-2 md:p-4 md:py-4 py-2 border-2 border-blue-500/30 duration-300 outline-none rounded-full "
            type="text"
            placeholder="Ask Orion"
          />
          <label className="relative bg-linear-to-r cursor-pointer shrink-0 hover:border-green-400 hover:shadow-[0_0_30px_green] hover:scale-105 duration-300 font-bold flex  from-green-800 border-2 to-teal-500 group rounded-full p-2 overflow-hidden md:p-4">
            <div className="absolute duration-300 translate-x-[-100%] group-hover:translate-x-[100%] top-0 left-0 inset-0 bg-linear-to-r from-transparent via-white to-transparent"></div>
            <span className="hover:scale-105 duration-300 hover:-translate-y-2">
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <input
              type="file"
              className="hidden"
              accept="image/*, .pdf, .txt, .doc, .docx"
            />
          </label>
          <button className="bg-linear-to-r relative cursor:pointer shrink-0 hover:shadow-[0_0_30px_blue]  hover:border-blue-500 font-bold flex hover:scale-105 duration-300 overflow-hidden from-blue-600 border-2 group to-sky-500 rounded-full  p-2 md:p-4">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover:translate-x-[100%] duration-300"></div>
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
