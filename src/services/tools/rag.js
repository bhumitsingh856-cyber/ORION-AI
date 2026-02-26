import { tool } from "@langchain/core/tools";
import vectorStore from "../RAG/vectorStore.js";
import { z } from "zod";
const ragTool = tool(
  async ({ query, retriverID }) => {
    try {
      const store = await vectorStore(retriverID);
      const retriever = store.asRetriever({ k: 4 });
      const data = await retriever.invoke(query);
      if (data.length === 0) {
        return "No relevant information found in the document.";
      }
      const result = data.map((e) => e.pageContent).join("\n");
      console.log("RAG Tool Result:", result);
      return result;
    } catch (err) {
      console.log("Error in ragTool :", err.message);
      return "Sorry, I couldn't retrieve the information at the moment.";
    }
  },
  {
    name: "ragTool",
    description:
      "Use this tool to retrieve relevant information from a document ID(if no ID tell the user to upload a document) sent by user based on user's query. This will RETURN the retrieved information that is relevant to the user's query.(dont INCLUDE the document ID in the response, ONLY return document ID in your responce instead include a title)",
    schema: z.object({
      query: z
        .string()
        .describe(
          "The user's query for which relevant information needs to be retrieved",
        ),
      retriverID: z
        .string()
        .describe(
          "The ID of the document to use for retrieving information from the vector store",
        ),
    }),
  },
);
export default ragTool;