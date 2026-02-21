import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import "dotenv/config";
const geminiEmbeddings = new GoogleGenerativeAIEmbeddings({
  model: "gemini-embedding-001",
});
export default geminiEmbeddings;
