import { ChatGroq } from "@langchain/groq";
import "dotenv/config";
const LLM = new ChatGroq({
  apiKey: process.env.GROQ_API,
  model: "llama-3.3-70b-versatile",
  temperature: 1,
});
export default LLM;
