"use server";
import user from "@/lib/models/user";
import { currentUser } from "@clerk/nextjs/server";
import { sendEmail } from "@/utils/mail";
export async function createUser() {
  try {
    const newuser = await currentUser();
    if (newuser) {
      const exist = await user.findOne({ clerkId: newuser.id });
      if (!exist) {
        await user.create({
          clerkId: newuser.id,
          name: newuser.fullName,
          email: newuser.primaryEmailAddress.emailAddress,
        });
        sendEmail(newuser.primaryEmailAddress.emailAddress, newuser.fullName);
      }
    }
  } catch (error) {
    console.log("error", error.message);
  }
}
