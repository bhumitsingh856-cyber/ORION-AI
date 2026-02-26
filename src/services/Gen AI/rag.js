import { docLoader } from "../RAG/docLoader.js";
import { textSplitter } from "../RAG/textSplitter.js";
import vectorStore from "../RAG/vectorStore.js";

async function rag(file, id) {
  const doc = await docLoader(file);
  const docs = await textSplitter(doc, file);
  try {
    const store = await vectorStore(id);
    await store.addDocuments(docs);
    console.log("Vectore stored in pinecone");
  } catch (err) {
    console.log("Error in gen ai rag :", err);
  }
}

export default rag;