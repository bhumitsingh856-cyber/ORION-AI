import agent from "../AImodels/Agent";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
export async function GenAI(prompt, history) {
  const formatedHistory = history.map((e) => {
    if (e.role === "user" && e.image.startsWith("http")) {
      return new HumanMessage({
        content: [
          { type: "text", text: e.content },
          {
            type: "imageUrl",
            image_url: e.image ,
          },
        ],
      });
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
