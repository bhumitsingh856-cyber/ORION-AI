import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tittle: { type: String, default: "Untitled Conversation" },
    messages: [
      {
        role: {
          type: String,
          enum:["user", "assistant"],
          required: true,
        },
        content: {
          default: "",
          type: String,
        },
        
        image: {
          type: String,
          default: "",
        },
        doc: {
          name: {
            type: String,
            default: "",
          },
          url:{
            type: String,
            default: "",
          },
          public_id: {
            type: String,
            default: "",
          }
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.models.Chat || mongoose.model("Chat", schema);
