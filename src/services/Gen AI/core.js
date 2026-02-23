import agent from "../AImodels/Agent";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
export async function GenAI(prompt, history) {
  console.log("prompt", prompt);
  const formatedHistory = history.map((e) => {
    if (e.role === "user" && e.image.startsWith("http")) {
      return new HumanMessage(`${e.content} , imageUrl: ${e.image}`);
    } else if (e.role === "user") {
      return new HumanMessage(e.content);
    } else {
      return new AIMessage(e.content);
    }
  });
  const res = await agent.invoke({
    messages: [...formatedHistory, new HumanMessage(prompt)],
  });
  const assistantResponse = res.messages.findLast(
    (m) => m._getType() === "ai" && m.content !== "",
  );
  return assistantResponse.content;
}
