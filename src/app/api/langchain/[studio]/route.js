import { NextResponse } from "next/server";
import { GenAI } from "@/services/Gen AI/core";
import chat from "@/lib/models/chat";
export async function POST(req,{params}){
    const {prompt}=await req.json();
    const {studio}=await params;
    const getchat=await chat.findById(studio);

    await getchat.messages.push({role:"user",content:prompt});
    await getchat.save();
    
    const history=await chat.findById(studio).select({ messages: { $slice: -30} });
    const res=await GenAI(prompt,history.messages);
    // const resp=await getchat.messages.push({role:"assistant",content:res});
    // await getchat.save();
    return NextResponse.json("hi");
}
