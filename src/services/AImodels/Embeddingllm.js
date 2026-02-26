import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import "dotenv/config";
const geminiEmbeddings = new GoogleGenerativeAIEmbeddings({
  apiKey: process.env.GOOGLE_API_KEY,
  model: "gemini-embedding-001",
});
export default geminiEmbeddings;
    