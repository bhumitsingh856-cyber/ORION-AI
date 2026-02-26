"use server";
import LLM from "@/services/AImodels/llm"; 
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

const parser = new StringOutputParser();
const intentPrompt = PromptTemplate.fromTemplate(`You are an intent classifier. Classify the user prompt into ONE category.

CATEGORIES:
- image_generation
- image_analysis
- code_generation
- web_search
- RAG_query
- general_query

EXAMPLES:

User: "create an image of a sunset over the ocean"
Classification: image_generation

User: "what's in this image I uploaded?"
Classification: image_analysis

User: "write a python function to sort an array"
Classification: code_generation

User: "what's the weather in Paris today?"
Classification: web_search

User: "summarize the document I uploaded yesterday"
Classification: RAG_query

User : "Query related to document"
Classification: RAG_query

User: "explain how photosynthesis works"
Classification: general_query

User: "draw me a cat wearing a hat"
Classification: image_generation

User: "search for latest AI news"
Classification: web_search

User: "help me write code for a login form"
Classification: code_generation

User: "describe what you see in this picture"
Classification: image_analysis

RULES:
1. Output ONLY the category slug
2. No explanation, no punctuation
3. If unsure, use general_query

USER PROMPT: {prompt}

Classification:`);
export async function getindent(prompt) {
  try {
    const chain = intentPrompt.pipe(LLM).pipe(parser);
    const res = await chain.invoke({ prompt: prompt });
    return res.trim().toLowerCase();
  } catch (e) {
    console.log("Error in indent action", e.message);
  }
}
 
