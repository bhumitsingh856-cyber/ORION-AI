  import mongoose from "mongoose";

  const schema = new mongoose.Schema({
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, },
    chats: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
  },{timestamps:true});

  export default mongoose.models.User || mongoose.model("User", schema);
