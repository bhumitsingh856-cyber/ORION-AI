import { InferenceClient } from "@huggingface/inference";
import "dotenv/config";

const client = new InferenceClient(process.env.HF_TOKEN);
async function analyseImage(imageURL, prompt) {
  const chatCompletion = await client.chatCompletion({
    model: "Qwen/Qwen2.5-VL-72B-Instruct:hyperbolic",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: prompt,
          },
          {
            type: "image_url",
            image_url: {
              url: imageURL,
            },
          },
        ],
      },
    ],
  });
  return chatCompletion.choices[0].message.content;
}

export default analyseImage;

