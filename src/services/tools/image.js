import { tool } from "@langchain/core/tools";
import generateImage from "../AImodels/imagellm.js";
import { z } from "zod";

const imageGenerationTool = tool(
  async ({ prompt }) => {
    return await generateImage(prompt);
  },
  {
    name: "imageGenerationTool",
    description: "Generate an image ONLY when the user uses keywords like 'generate image', 'draw', or 'create a picture' etc. Do not use for text-based answers. This will RETURN a URL of the image , you MUST include that URL in your final response",
    schema: z.object({
      prompt: z.string().describe("The description of the image to generate"),
    })
  },
);
export default imageGenerationTool;
