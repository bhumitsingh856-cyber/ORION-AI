import { tool } from "@langchain/core/tools";
import analyseImage from "../AImodels/visionllm";
import { z } from "zod";

const imageVisionTool = tool(
  async ({ imageURL, prompt }) => {
    return await analyseImage(imageURL, prompt);
  },
  {
    name: "imageVisionTool",
    description: "Analyze an image provided via a DIRECT URL. ONLY use this if a URL is present in the conversation history.",
    schema: z.object({
      imageURL: z.string().describe("The direct URL of the image to analyze"),
      prompt: z.string().describe("What specifically to look for or describe in the image"),
    }),
  },
);
export default imageVisionTool;
