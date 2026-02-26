import geminiEmbeddings from "../AImodels/Embeddingllm.js";
import { Pinecone as PineconeClient } from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";
import "dotenv/config";

const pinecone = new PineconeClient({apiKey:process.env.PINECONE_API_KEY})
const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX);

const vectorStore=async(id)=>{
    const store = await PineconeStore.fromExistingIndex(geminiEmbeddings,{
        pineconeIndex:pineconeIndex,
        maxConcurrency:5,
        namespace: id,
        textKey: "text",
    });

    return store;
}

export default vectorStore;