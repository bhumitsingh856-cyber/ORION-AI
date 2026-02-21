import { tool } from "@langchain/core/tools";
import generateImage from "../AImodels/imagellm.js";
import { z } from "zod";

const imageGenerationTool = tool(
  async ({ prompt }) => {
    return await generateImage(prompt);
  },
  {
    name: "imageGenerationTool",
    description: "Use this tool to generate an image , this will return a URL of the image so,include the URL in your final response",
    schema: z.object({
      prompt: z.string().describe("The description of the image to generate"),
    })
  },
);
export default imageGenerationTool;
