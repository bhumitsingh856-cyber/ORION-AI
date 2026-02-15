"use server"
import chat from "@/lib/models/chat";
export default async function getChat(chatId){
    try {
        const getchat=await chat.findById(chatId);
       
        return {success:true,chat:JSON.parse(JSON.stringify(getchat.messages))}; 
    } catch (error) {
        return {success:false,message:"Internal server error"}
    }
}