import { TavilySearch } from "@langchain/tavily";
import "dotenv/config";
import { tool } from "@langchain/core/tools";
import { z } from "zod";

const tavilySearchTool = new TavilySearch({
  tavilyApiKey: process.env.TAVILY_API,
  maxResults: 3, // Optional: default is 5
  searchDepth: "basic", // Optional: "basic" or "advanced"
});
const webSearchTool = tool(
  async ({ query }) => {
    try {
      const res = await tavilySearchTool.invoke({ query: query });
      const result = res.results.map((e) => e.content);
      return result;
    } catch (e) {
      console.log("Error in web search tool", e.message);
    }
  },
  {
    name: "webSearchTool",
    description: "A tool to search the internet. Use this for current events, weather, or facts. Input should be a JSON object with a 'query' string key.",
    schema: z.object({
      query: z.string().describe("The search query to look up on web"),
    }),
  },
);
export default webSearchTool;
