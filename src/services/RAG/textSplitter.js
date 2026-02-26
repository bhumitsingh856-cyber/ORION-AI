import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "@langchain/core/documents";

export async function textSplitter(text,src) {
  try {
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1500,
      chunkOverlap: 300,
    });
    const chunks = await splitter.splitText(text);
    const doc = chunks.map(
      (chunk) =>
        new Document({
          pageContent: chunk,
          metadata: { source: src },
        }),
    );
    return doc;
  } catch (error) {
    console.error("Error in textSplitter:", error.message);
  }
}
