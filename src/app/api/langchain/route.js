import { NextResponse } from "next/server";
import LLM from "@/services/llm";
export async function POST(req){
    const {prompt}=await req.json();
    console.log(prompt);
}
