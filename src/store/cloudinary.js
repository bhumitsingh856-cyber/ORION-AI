import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function cloudUpload(imageBuffer) {
  try {
    // 1. Convert Buffer to Base64 Data URI
    const base64Image = `data:image/png;base64,${imageBuffer.toString("base64")}`;

    // 2. Use the built-in Promise-based upload method
    const result = await cloudinary.uploader.upload(base64Image, {
      folder: "orion_generations", // Organizes your images in Cloudinary
    });

    // 3. Return the secure URL
    console.log("result.secure_url",result.secure_url)
    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error.message);
  }
}

export default cloudUpload;