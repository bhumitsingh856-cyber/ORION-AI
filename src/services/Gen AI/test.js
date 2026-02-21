import webSearchTool from "../tools/websearch.js";
import imageGenerationTool from "../tools/image.js";
import LLM from "../AImodels/llm.js";
import { createAgent } from "langchain";

const agent = createAgent({
  model: LLM,
  tools: [webSearchTool, imageGenerationTool],
});
try {
  const res = await agent.invoke({
    messages: [
      {
        role: "user",
        content:
          "i need an image of a modern city with a futuristic architecture and colorful buildings",
      },
    ],
  });
  console.log(res.messages);
} catch (e) {
  console.log(e.message);
}
