import { ChatGroq } from "@langchain/groq";
import "dotenv/config";

`models :
1> openai/gpt-oss-20b
2> llama-3.3-70b-versatile
3> openai/gpt-oss-120b
`
const LLM = new ChatGroq({
  apiKey: process.env.GROQ_API,
  model: "openai/gpt-oss-20b",
  temperature: 0.1,
});
export default LLM;
