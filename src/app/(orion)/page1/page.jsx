"use client"
import { useUser } from "@clerk/nextjs";
const ChatPage = () => {
  const {user}=useUser();
  return (
    <div className="flex justify-center flex-col gap-6 text-center items-center min-h-[60vh] px-4">
      {/* Animated Logo */}
      <div className="relative mb-4">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)] animate-pulse">
          <span className="text-white font-bold text-4xl">O</span>
        </div>
        {/* Orbiting particles */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-300"></div>
      </div>

      {/* Greeting */}
      <div className="text-5xl md:text-6xl font-bold space-y-2">
        <div className="animate-fade-in">
          <span className="text-gray-100">Hi, </span>
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            {user?.username}
          </span>
          <span className="inline-block animate-wave ml-2">👋</span>
        </div>
      </div>

      {/* Subtitle */}
      <div className="space-y-3 max-w-3xl">
        <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          What would you like to build today?
        </p>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
          Chat, retrieve knowledge, search the web, or generate content - all in
          one AI workspace.
        </p>
      </div>

      {/* Suggestion Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full max-w-5xl">
        {/* Card 1 - Chat */}
        <div className="group relative bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/40 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              💬
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Start Chat</h3>
            <p className="text-sm text-gray-400">Have a conversation with AI</p>
          </div>
        </div>

        {/* Card 2 - Search */}
        <div className="group relative bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/40 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              🔍
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Search Web</h3>
            <p className="text-sm text-gray-400">Find information online</p>
          </div>
        </div>

        {/* Card 3 - Knowledge */}
        <div className="group relative bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              📚
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Knowledge</h3>
            <p className="text-sm text-gray-400">Access your documents</p>
          </div>
        </div>

        {/* Card 4 - Create */}
        <div className="group relative bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 hover:border-pink-500/40 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              ✨
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Create</h3>
            <p className="text-sm text-gray-400">Generate content & code</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <button className="px-4 py-2 bg-stone-800/50 hover:bg-stone-800 border border-stone-700/50 hover:border-stone-600 rounded-full text-sm text-gray-300 hover:text-white transition-all hover:scale-105">
          💡 Explain a concept
        </button>
        <button className="px-4 py-2 bg-stone-800/50 hover:bg-stone-800 border border-stone-700/50 hover:border-stone-600 rounded-full text-sm text-gray-300 hover:text-white transition-all hover:scale-105">
          📝 Write content
        </button>
        <button className="px-4 py-2 bg-stone-800/50 hover:bg-stone-800 border border-stone-700/50 hover:border-stone-600 rounded-full text-sm text-gray-300 hover:text-white transition-all hover:scale-105">
          💻 Help with code
        </button>
        <button className="px-4 py-2 bg-stone-800/50 hover:bg-stone-800 border border-stone-700/50 hover:border-stone-600 rounded-full text-sm text-gray-300 hover:text-white transition-all hover:scale-105">
          🎨 Design ideas
        </button>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default ChatPage;
