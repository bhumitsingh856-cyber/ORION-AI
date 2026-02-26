import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usestudioStore = create(
  persist((set, get) => ({
    chat: [],
    chatlist: [],
    prompt: "",
    setPrompt: (prompt) => set({ prompt }),

    setChat: (chat) => set({ chat }),
    addChat: (chat) => set((state) => ({ chat: [...state.chat, chat] })),

    setChatlist: (chatlist) => set({ chatlist }),
    addChatlist: (chat) =>
      set((state) => ({ chatlist: [...state.chatlist, chat] })),
    removeChatList: (chatid) =>
      set((state) => ({
        chatlist: state.chatlist.filter((c) => c._id !== chatid),
      })),
  })),
);
