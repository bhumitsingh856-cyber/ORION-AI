"use client";
import SideBar from "@/components/SideBar";
import { useState } from "react";
import handleToggle from "@/utils/haptics";

export default function Layout({ children }) {
  const [showBar, setShowBar] = useState(false);

  return (
    <div className="grid grid-cols-none md:grid-cols-12 h-screen bg-linear-to-b from-purple-900/20 ">
      <button
        onClick={() =>{ handleToggle(); setShowBar(!showBar)}}
        className={`flex md:hidden z-40 w-fit fixed top-0 text-4xl ${showBar ? "rotate-0 " : "-rotate-180 "} duration-500 ease-out`}
      >
        <span>{showBar ? "✕" : "☰"}</span>
      </button>
      <div
        className={`col-span-3   z-50 md:static fixed md:translate-x-0  duration-300   ease-out ${showBar ? "mt-12 translate-x-0" : "-translate-x-[200%]"}`}
      >
        <SideBar />
      </div>

      <div className="md:col-span-9 col-span-full">{children}</div>
    </div>
  );    
}  
   