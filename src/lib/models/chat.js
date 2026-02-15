import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tittle: { type: String ,
        default: "Untitled Conversation"
    },
    messages:{
      type: Array,
      default: []
    },
  },
  { timestamps: true },
);

export default mongoose.models.Chat || mongoose.model("Chat", schema);
