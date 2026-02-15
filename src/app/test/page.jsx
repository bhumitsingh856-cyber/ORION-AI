"use client";
import React from "react";
import { usestudioStore } from "@/store/zustand";

function page() {
  const { prompt, setPrompt, setChat, chat, addChat ,removeChatList} = usestudioStore();
  const chats = [
    {
      _id: "msg_1",
      role: "user",
      content: "Can you explain Schrödinger's cat like I'm five?",
      createdAt: "2024-05-20T10:00:00Z",
    },
    {
      _id: "msg_2",
      role: "assistant",
      content:
        "Imagine a box with a toy cat inside. Until you open the lid, you can pretend the cat is both having a nap AND playing with a ball at the same time! It’s only when you look inside that you see what’s actually happening.",
      createdAt: "2024-05-20T10:00:05Z",
    },
    {
      _id: "msg_3",
      role: "user",
      content: "That's cool! Does the cat like treats?",
      createdAt: "2024-05-20T10:01:10Z",
    },
  ];
  return (
    <div className="flex justify-between">
      <button className="p-4 bg-gray-900" onClick={() => setChat(chats)}>
        Set prompt
      </button>
      <br />
      <button
        onClick={() =>
          addChat({
            _id: "msg_3",
            role: "user",
            content: "That's cool! Does the cat like treats?",
            createdAt: "2024-05-20T10:01:10Z",
          })
        }
      >
        Add
      </button>
      <button onClick={()=>removeChatList({_id:"msg_1"})}>Remove</button>
      <button className="p-4 bg-gray-900" onClick={() => console.log(chat)}>
        Print
      </button>
    </div>
  );
}

export default page;
