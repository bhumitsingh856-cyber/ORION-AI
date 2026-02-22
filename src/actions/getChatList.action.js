"use server";
import user from "@/lib/models/user";
import { currentUser } from "@clerk/nextjs/server";
export async function getchatlist() {
    const id=await currentUser();
  try {
    const userchatlist=await user.findOne({clerkId:id.id}).populate("chats","tittle updatedAt").sort({updatedAt:1});
    return JSON.parse(JSON.stringify(userchatlist));
  } catch (e) {
    console.log(e.message);
  }
}
