"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import Link from "next/link";

const ExploreWorkspace = () => {
  const [activeDemo, setActiveDemo] = useState("chat");

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-purple-950/20 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-purple-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4 md:mb-6">
            Experience the Power of AI
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Explore our interactive demos to see how Orion Studio can transform
            your workflow
          </p>
        </motion.div>

        {/* Demo Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            {
              id: "chat",
              icon: "💬",
              label: "AI Chat",
              gradient: "from-blue-600 to-cyan-600",
              shadow: "rgba(59,130,246,0.4)",
            },
            {
              id: "document",
              icon: "📄",
              label: "Documents",
              gradient: "from-purple-600 to-pink-600",
              shadow: "rgba(168,85,247,0.4)",
            },
            {
              id: "search",
              icon: "🌐",
              label: "Web Search",
              gradient: "from-green-600 to-emerald-600",
              shadow: "rgba(34,197,94,0.4)",
            },
            {
              id: "image",
              icon: "🎨",
              label: "Images",
              gradient: "from-pink-600 to-rose-600",
              shadow: "rgba(236,72,153,0.4)",
            },
          ].map((demo) => (
            <motion.button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`px-4 md:px-6 py-2 md:py-3 cursor-pointer rounded-xl text-sm md:text-base font-medium transition-all duration-300 ${
                activeDemo === demo.id
                  ? `bg-gradient-to-r ${demo.gradient} text-white`
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
              style={
                activeDemo === demo.id
                  ? { boxShadow: `0 0 30px ${demo.shadow}` }
                  : {}
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden md:inline">
                {demo.icon} {demo.label}
              </span>
              <span className="md:hidden">{demo.icon}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Demo Content */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Left: Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo}
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              {activeDemo === "chat" && (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Intelligent Conversations
                  </h2>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                    Chat with our advanced AI assistant that understands
                    context, remembers conversations, and provides accurate,
                    helpful responses.
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      {
                        title: "Context-Aware",
                        desc: "Understands the conversation history",
                      },
                      {
                        title: "Multi-Turn Dialogue",
                        desc: "Natural back-and-forth conversations",
                      },
                      {
                        title: "Code Generation",
                        desc: "Write, debug, and explain code",
                      },
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-xl border border-blue-500/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm md:text-base mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-gray-500 text-xs md:text-sm">
                            {feature.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}

              {activeDemo === "document" && (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Document Intelligence
                  </h2>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                    Upload PDFs, Word documents, or text files and let AI
                    extract insights, summarize content, and answer questions.
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      {
                        title: "Smart Extraction",
                        desc: "Pull out key information automatically",
                      },
                      {
                        title: "Q&A on Documents",
                        desc: "Ask questions about your files",
                      },
                      {
                        title: "Multi-Format Support",
                        desc: "PDF, DOCX, PNG, JPG, JPEG",
                      },
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-xl border border-purple-500/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-purple-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm md:text-base mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-gray-500 text-xs md:text-sm">
                            {feature.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}

              {activeDemo === "search" && (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Real-Time Web Search
                  </h2>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                    Get up-to-date information from the web with AI-powered
                    search that understands your queries and provides accurate
                    answers.
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      {
                        title: "Current Information",
                        desc: "Access the latest data and news",
                      },
                      {
                        title: "Source Citations",
                        desc: "Transparent sourcing for all answers",
                      },
                      {
                        title: "Smart Summarization",
                        desc: "Condensed insights from multiple sources",
                      },
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-xl border border-green-500/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm md:text-base mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-gray-500 text-xs md:text-sm">
                            {feature.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}

              {activeDemo === "image" && (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    AI Image Generation
                  </h2>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                    Transform your ideas into stunning visuals with
                    state-of-the-art AI image generation technology.
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      {
                        title: "Text-to-Image",
                        desc: "Create images from descriptions",
                      },
                      {
                        title: "Multiple Styles",
                        desc: "Photorealistic, artistic, and more",
                      },
                      {
                        title: "High Resolution",
                        desc: "Professional quality outputs",
                      },
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-xl border border-pink-500/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-pink-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm md:text-base mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-gray-500 text-xs md:text-sm">
                            {feature.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Right: Interactive Demo Preview */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-8 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              {activeDemo === "chat" && (
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start gap-2 md:gap-3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs md:text-sm font-semibold">
                        U
                      </span>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl rounded-tr-sm px-4 md:px-6 py-3 md:py-4 max-w-[80%]">
                      <p className="text-white text-xs md:text-sm">
                        What are the key trends in AI for 2026?
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-2 md:gap-3"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">O</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl rounded-tl-sm px-4 md:px-6 py-3 md:py-4 max-w-[85%]">
                      <p className="text-white text-xs md:text-sm mb-3">
                        Based on current developments, here are the key AI
                        trends for 2026:
                      </p>
                      <ul className="text-gray-300 text-xs md:text-sm space-y-2 list-disc list-inside">
                        <li>Multimodal AI systems</li>
                        <li>AI agents and automation</li>
                        <li>Edge AI deployment</li>
                        <li>Responsible AI practices</li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              )}

              {activeDemo === "document" && (
                <div className="space-y-4 md:space-y-6">
                  <motion.div
                    className="p-4 md:p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <div>
                        <p className="text-white text-sm md:text-base font-semibold">
                          quarterly_report.pdf
                        </p>
                        <p className="text-gray-500 text-xs md:text-sm">
                          2.4 MB
                        </p>
                      </div>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                    <p className="text-green-400 text-xs md:text-sm mt-2">
                      ✓ Analysis complete
                    </p>
                  </motion.div>
                  <div className="space-y-3">
                    <p className="text-gray-400 text-xs md:text-sm">
                      Key Insights:
                    </p>
                    {[
                      "Revenue increased by 23% YoY to $45M",
                      "Customer retention rate: 94%",
                      "New product launch scheduled for Q2",
                    ].map((insight, idx) => (
                      <motion.div
                        key={idx}
                        className="p-3 md:p-4 bg-white/5 rounded-lg border border-white/10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                      >
                        <p className="text-white text-xs md:text-sm">
                          {insight}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeDemo === "search" && (
                <div className="space-y-4">
                  <motion.div
                    className="p-3 md:p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <p className="text-white text-xs md:text-sm font-medium">
                        Latest AI breakthroughs 2026
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-green-500/30 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                          animate={{ width: ["0%", "75%", "75%"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      <span className="text-green-400 text-xs">
                        Searching...
                      </span>
                    </div>
                  </motion.div>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Google DeepMind's New Multimodal AI",
                        source: "TechCrunch",
                      },
                      {
                        title: "OpenAI Announces GPT-5 Release",
                        source: "The Verge",
                      },
                      {
                        title: "AI in Healthcare: Major Breakthrough",
                        source: "Nature",
                      },
                    ].map((result, idx) => (
                      <motion.div
                        key={idx}
                        className="p-3 md:p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <p className="text-white text-xs md:text-sm font-medium mb-1">
                          {result.title}
                        </p>
                        <p className="text-gray-500 text-xs">{result.source}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeDemo === "image" && (
                <div className="space-y-4 md:space-y-6">
                  <motion.div
                    className="p-3 md:p-4 bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-white text-xs md:text-sm mb-3">
                      <span className="text-pink-400 font-semibold">
                        Prompt:
                      </span>{" "}
                      "A futuristic AI workspace with holographic displays and
                      neon lights"
                    </p>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-pink-500 to-rose-500"
                        animate={{ width: ["0%", "66%", "66%"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <p className="text-pink-400 text-xs md:text-sm mt-2">
                      Generating...
                    </p>
                  </motion.div>
                  <motion.div
                    className="aspect-square bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-white/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="text-center p-4">
                      <motion.svg
                        className="w-12 h-12 md:w-16 md:h-16 text-pink-400 mx-auto mb-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </motion.svg>
                      <p className="text-gray-400 text-xs md:text-sm">
                        Your AI-generated image will appear here
                      </p>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <Link 
        href="/orion"
        >
          <button className="relative cursor-pointer py-2 sm:py-4 w-full justify-center bg-linear-to-r from-blue-600 via-green-500 to-teal-500 border-2 border-blue-200 hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 text-white font-semibold rounded-xl text-base sm:text-lg transition-all duration-300 flex items-center  hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] overflow-hidden group">
       
            <span className="font-extralight"></span>
            Create a Orion Studio account to Proceed
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreWorkspace;
