"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import handleToggle from "@/utils/haptics";
const LandingPage = () => {
  return (
    <div className="min-h-screen font-normal bg-black relative overflow-hidden">
      {/* Enhanced Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-purple-950/20 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      {/* Animated glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-500"></div>

      {/* Top glowing line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>

      {/* Hero Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-10 pt-20 sm:pt-32 pb-16 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl bg-linear-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent font-bold tracking-wide drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            ORION STUDIO.
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-4 bg-linear-to-b from-gray-100 to-gray-600 bg-clip-text text-transparent font-light tracking-[0.2em]">
            MULTIMODAL AI WORKSPACE
          </h2>

          <p className="mt-8 sm:mt-12 max-w-3xl text-base sm:text-lg lg:text-xl text-gray-300 text-center mx-auto leading-relaxed">
            Chat, retrieve knowledge from documents, search the web, analyze
            images, and generate content — all in one intelligent system.
          </p>

          {/* Enhanced CTA Buttons with gradient and effects */}
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            {/* <button className="relative px-10 sm:px-14 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 text-white font-semibold rounded-xl text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] overflow-hidden group">
              <span className="relative z-10">Start Chat</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button> */}
            <Link
            href="/page1"
            onClick={handleToggle}
            className="relative px-10 sm:px-14 py-4 sm:py-5 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 hover:from-purple-600/30 hover:via-pink-600/30 hover:to-purple-600/30 border-2 border-purple-500/50 hover:border-purple-400 cursor-pointer text-gray-200 hover:text-white font-semibold rounded-xl text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] backdrop-blur-sm overflow-hidden group">
              <span className="relative z-10">EXPLORE WORKSPACE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent -translate-x-full group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Link>
          </div>

          {/* Feature tags with cards */}
         
            <div className="mt-16  sm:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
              <motion.div
              onClick={handleToggle}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "circOut" }}
                viewport={{ once: true }}
                className="bg-gradient-to-br hover:-translate-y-2  cursor-pointer  from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 sm:p-5 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl sm:text-3xl mb-2">💬</div>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  Chat
                </p>
              </motion.div>
              <motion.div
              onClick={handleToggle}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br hover:-translate-y-2  cursor-pointer  from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 sm:p-5 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl sm:text-3xl mb-2">📄</div>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  PDF RAG
                </p>
              </motion.div>
              <motion.div
              onClick={handleToggle}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br hover:-translate-y-2  cursor-pointer  from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/30 rounded-xl p-4 sm:p-5 hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl sm:text-3xl mb-2">🌐</div>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  Web Search
                </p>
              </motion.div>
              <motion.div
              onClick={handleToggle}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br hover:-translate-y-2  cursor-pointer  from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/30 rounded-xl p-4 sm:p-5 hover:border-orange-400/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl sm:text-3xl mb-2">🖼️</div>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  Image Analysis
                </p>
              </motion.div>
              <motion.div
              onClick={handleToggle}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br hover:-translate-y-2  cursor-pointer  from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/30 rounded-xl p-4 sm:p-5 hover:border-pink-400/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300 hover:scale-105 col-span-2 sm:col-span-3 lg:col-span-1"
              >
                <div className="text-2xl sm:text-3xl mb-2">✨</div>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  Image Gen
                </p>
              </motion.div>
            </div>
         
        </div>
      </div>

      {/* Enhanced Glowing Divider */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 my-12">
        <div className="relative h-[2px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-md"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-lg"></div>
        </div>
      </div>

      {/* Enhanced How it Works Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold mb-4">
            How Orion Studio Works
          </h2>
          <p className="text-center text-gray-400 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Experience seamless AI-powered workflows with intelligent routing
            and grounded responses
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative">
            {/* Connecting arrows for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-1/3 transform -translate-y-1/2 w-1/6 h-[2px]">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-sm"></div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-purple-500"></div>
            </div>
            <div className="hidden lg:block absolute top-1/2 right-1/3 transform -translate-y-1/2 w-1/6 h-[2px]">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-green-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-green-400 blur-sm"></div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-green-500"></div>
            </div>

            {/* Card 1 - Input */}
            <motion.div
            onClick={handleToggle}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "linear" }}
              
              className="relative bg-gradient-to-br hover:scale-105 cursor-pointer from-blue-500/10 via-blue-600/5 to-transparent backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 sm:p-10 hover:border-blue-400/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-3">
                  Input
                </h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  Ask a question or upload content to begin your AI-powered
                  journey
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            </motion.div>

            {/* Card 2 - Intelligent Routing */}
            <motion.div
            onClick={handleToggle}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2, ease: "linear" }}
              
              className="relative bg-gradient-to-br hover:scale-105 cursor-pointer from-purple-500/10 via-purple-600/5 to-transparent backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 sm:p-10 hover:border-purple-400/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-purple-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-3">
                  Intelligent Routing
                </h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  Advanced LLM analyzes your request and selects optimal tools
                  automatically
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            </motion.div>

            {/* Card 3 - Grounded Response */}
            <motion.div
            onClick={handleToggle}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0, ease: "linear" }}
              
              className="relative bg-gradient-to-br hover:scale-105 cursor-pointer from-green-500/10 via-green-600/5 to-transparent backdrop-blur-xl border border-green-500/30 rounded-2xl p-8 sm:p-10 hover:border-green-400/60 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-green-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent mb-3">
                  Grounded Response
                </h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  Receive accurate answers with complete source citations and
                  full transparency
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <div className="mt-20 sm:mt-24 text-center">
            <p className="text-gray-500 text-sm sm:text-base mb-4">
              Built with cutting-edge technologies
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {["NEXT JS", "LANGCHAIN", "PINECONE", "TAVILY", "LLAMA"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-4 hover:-translate-y-2 hover:scale-105 sm:px-6 py-2 cursor-pointer bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-full text-gray-400 text-xs sm:text-sm backdrop-blur-sm hover:border-gray-600 hover:text-gray-300 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glowing line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
    </div>
  );
};

export default LandingPage;
