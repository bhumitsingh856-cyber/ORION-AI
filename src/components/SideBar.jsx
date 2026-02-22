"use client";
import { memo } from "react";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import handleToggle from "@/utils/haptics";
import { createNewSpace } from "@/actions/newchat.action";
import { useRouter } from "next/navigation";
import timeAgo from "@/utils/timeago";
const SideBar = memo(({ setShowBar, chatlist, addChatlist }) => {
  const router = useRouter();
  const handleNewChat = async () => {
    handleToggle();
    const result = await createNewSpace();
    if (result.success) {
      addChatlist(result.chat);
      router.push(`/ostudio/${result.chat._id}`);
      setShowBar(false);
    } else {
      console.error("Failed to create chat:", result.error);
    }
  };
  return (
    <div className="flex gap-2">
      <div className="w-full bg-linear-to-r bg-black p-2 h-screen flex flex-col">
        <div className="flex bg-linear-to-r from-blue-500/20 rounded-b-lg justify-between p-4">
          <div className="flex gap-2 items-center font-bold">
            <span className="bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg h-7 w-7 p-4 flex justify-center items-center text-xl font-bold">
              O
            </span>
            <span className="md:text-2xl text-xl">ORION STUDIO</span>
          </div>
          <div
            onClick={handleToggle}
            className="bg-amber-100 hover:shadow-[0_0_30px_blue] hover:rotate-10 hover:scale-110 hover:bg-linear-to-l duration-200 rounded-full flex items-center h-fit bg-linear-to-br p-[2px] from-blue-500  to-green-500 "
          >
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        <div className="h-[2px] bg-linear-to-r mb-4 from-transparent via-red-500  to-transparent"></div>
        {/* <div className="p-2">
          <input className="p-2 outline-none border w-full rounded-lg bg-stone-900/40" placeholder="Search chats" type="text" />
        </div> */}

        <div className="mb-4 border-dotted w-full ">
          <div
            onClick={handleToggle}
            className="border-zinc-500 text-center cursor-pointer hover:scale-105 duration-300 px-2 py-1 mx-auto w-fit font-bold border-dashed  rounded-full border-2 bg-zinc-700/40 relative"
          >
            Welcome to Orion Studio
          </div>
        </div>
        <button
          onClick={handleNewChat}
          className="relative  py-2 sm:py-2 w-full justify-center bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 border-2 border-blue-200 hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 text-white font-semibold rounded-xl text-base sm:text-lg transition-all duration-300 flex items-center  hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] overflow-hidden group"
        >
          <span className="text-4xl font-extralight">+</span>
          <span className="font-extralight"></span>
          New Chat
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </button>
        <h1 className="text-xl my-4 font-bold">Recent chats</h1>
        <div className="overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden">
          {chatlist?.length == 0 && (
            <p className="text-sm text-gray-400">No recent chats found</p>
          )}
          {chatlist?.length > 0 &&
            chatlist?.map((e) => (
              <div
                onClick={() => {
                  router.push(`/ostudio/${e._id}`);
                  handleToggle();
                  setShowBar(false);
                }}
                key={e._id}
                className="bg-gray-700/30 mb-2 p-2 hover:text-purple-500  cursor-pointer hover:scale-97 duration-300  hover:border-gray-700 border border-gray-500/40 py-4 flex items-center gap-2 rounded-xl"
              >
                <span className="text-xl p-2 hover:-rotate-12 duration-200 bg-linear-to-r from-blue-500/20 to-cyan-400/20 rounded-xl">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-sm line-clamp-1 font-bold">{e.tittle}</p>
                  <p className="text-sm font-light text-gray-400">
                    {timeAgo(e.updatedAt)}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="bg-linear-to-b from-transparent via-red-500 to-transparent h-[90vh] w-[3px]"></div>
    </div>
  );
});
export default SideBar;
