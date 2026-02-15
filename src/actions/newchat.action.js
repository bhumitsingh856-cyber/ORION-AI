"use server";
import chat from "@/lib/models/chat";
import user from "@/lib/models/user";
import { currentUser } from "@clerk/nextjs/server";

export const createNewSpace = async () => {
  try {
    const clerkuser = await currentUser();
    if (clerkuser) {
      const getUser = await user.findOne({ clerkId: clerkuser.id });
      if (getUser) {
        const newChat = await chat.create({ userId: getUser._id });
        await getUser.chats.push(newChat._id);
        await getUser.save();
        return JSON.parse(
          JSON.stringify({
            success: true,
            chat: {
              _id: newChat._id,
              tittle: newChat.tittle,
              updatedAt: newChat.updatedAt,
            },
          }),
        );
      }
    }
  } catch (e) {
    console.log(e);
  }
};
