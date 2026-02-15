import { ChatGroq } from "@langchain/groq";
import "dotenv/config"; 

const LLM = new ChatGroq({
    apiKey: process.env.GROQ_API,
    model:"openai/gpt-oss-120b",
    temperature:1
})

export default LLM;