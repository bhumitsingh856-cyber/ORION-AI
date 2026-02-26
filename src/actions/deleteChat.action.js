"use server"
import chat from "@/lib/models/chat";
const deleteChat = async (chatId) => {
    try{
        const chatToDelete = await chat.findByIdAndDelete(chatId);
        if(!chatToDelete){
            return JSON.parse(JSON.stringify({success:false,error:"Chat not found"}));
        }
        return JSON.parse(JSON.stringify({success:true,chat:chatToDelete}));
    }catch(e){
        console.log("Error in deleting chat",e.message);
    }
}
export default deleteChat;