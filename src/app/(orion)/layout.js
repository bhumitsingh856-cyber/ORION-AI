"use client";
import SideBar from "@/components/SideBar";
import { useState, useEffect } from "react";
import handleToggle from "@/utils/haptics";
import { createUser } from "@/actions/createuser";
import { usestudioStore } from "@/store/zustand";
import { getchatlist } from "@/actions/getChatList.action";
export default function Layout({ children }) {
  const [showBar, setShowBar] = useState(false);

  const setChatlist= usestudioStore((state) => (state.setChatlist));
  const chatlist = usestudioStore((state) => (state.chatlist));
  const addChatlist = usestudioStore((state) => (state.addChatlist));
  const removeChatList = usestudioStore((state) => (state.removeChatList));
  
  const loadchatlist = async ()=>{
    const list =await getchatlist();
    setChatlist(list.chats);
  }   
  const initialize = async () => {
    await createUser();
    await loadchatlist();
  }
  
  useEffect(() => {
    initialize();
  }, [] );
  return (
    <div className="grid grid-cols-none md:grid-cols-12 h-screen bg-linear-to-b from-purple-900/20 ">
      <button
        onClick={() => {
          handleToggle();
          setShowBar(!showBar);
        }}
        className={`flex md:hidden z-21 w-fit fixed top-0  text-4xl ${showBar ? "rotate-0 " : "-rotate-180 "} duration-500 ease-out`}
      >
        <span
          className={`${showBar && "bg-clip-text text-transparent bg-gradient-to-r from-blue-500  to-green-500"}`}
        >
          {showBar ? "✕" : "☰"}
        </span>
      </button>
      <div
        className={`col-span-3 z-20 md:static fixed w-full  md:translate-x-0 duration-300 ease-out ${showBar ? " translate-x-0" : "-translate-x-[200%]"}`}
      >
        <SideBar setShowBar={setShowBar} chatlist={chatlist} addChatlist={addChatlist} removeChatList={removeChatList}/> 
      </div>

      <div className="md:col-span-9 col-span-full">{children}</div>
    </div>
  );
}
