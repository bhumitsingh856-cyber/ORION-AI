import { InferenceClient } from "@huggingface/inference";
import "dotenv/config";
import cloudUpload from "../../store/cloudinary.js";

const client = new InferenceClient(process.env.HF_TOKEN);

async function generateImage(prompt) {
  const image = await client.textToImage({
    provider: "nscale",
    model: "black-forest-labs/FLUX.1-schnell",
    inputs: prompt,
    parameters: { num_inference_steps: 4 },
  });
  const buffer = Buffer.from(await image.arrayBuffer());
  const url = await cloudUpload(buffer);
  return {
    type: "image",
    url: url, 
  };
}

export default generateImage;
