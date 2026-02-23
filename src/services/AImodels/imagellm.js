import { InferenceClient } from "@huggingface/inference";
import "dotenv/config";
import cloudUpload from "../../store/cloudinary.js";

const client = new InferenceClient(process.env.HF_TOKEN);

async function generateImage(prompt) {
  try{

    const image = await client.textToImage({
      model: "black-forest-labs/FLUX.1-schnell",
      inputs: prompt,
      parameters: { num_inference_steps: 4 },
    });
    console.log("image",image)
    const buffer = Buffer.from(await image.arrayBuffer());
    const url = await cloudUpload(buffer);
    return {
      type: "image",
      url: url, 
    };
  }catch(e){
    return "Error in generating Image"
    console.log("Error in image generation",e);
  }
}

export default generateImage;
