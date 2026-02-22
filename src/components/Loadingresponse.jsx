// components/IntentLoadingState.jsx
"use client";
import { motion ,AnimatePresence} from "framer-motion";

export default function IntentLoadingState({ loadingType }) {
  const intentConfig = {
    image_generation: {
      icon: "🎨",
      color: "from-pink-500 to-purple-500",
      label: "Generating Image",
      description: "Creating your visual masterpiece...",
    },
    image_analysis: {
      icon: "🔍",
      color: "from-blue-500 to-cyan-500",
      label: "Analyzing Image",
      description: "Examining visual details...",
    },
    code_generation: {
      icon: "💻",
      color: "from-green-500 to-emerald-500",
      label: "Writing Code",
      description: "Crafting your solution...",
    },
    web_search: {
      icon: "🌐",
      color: "from-orange-500 to-yellow-500",
      label: "Searching Web",
      description: "Finding latest information...",
    },
    general_query: {
      icon: "💬",
      color: "from-gray-500 to-slate-500",
      label: "Processing Request",
      description: "Thinking about your question...",
    },
    RAG_query: {
      icon: "📚",
      color: "from-indigo-500 to-violet-500",
      label: "Searching Documents",
      description: "Looking through your files...",
    },
    analyzing_intent: {
      icon: "🧠",
      color: "from-blue-500 to-purple-500",
      label: "Analyzing Intent",
      description: "Understanding your request...",
    },
  };

  const config = intentConfig[loadingType] || intentConfig.analyzing_intent;

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 w-full max-w-md mx-auto">
      <div className="relative flex flex-col items-center gap-8 w-full">
        {/* DYNAMIC CONTENT AREA */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* 1. Background Glow (Universal) */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${config.color} opacity-20 rounded-full blur-3xl`}
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* 2. Intent-Specific Animations */}
          <AnimatePresence mode="wait">
            {loadingType === "image_generation" ? (
              <ImageTemplateAnimation key="img-gen" color={config.color} />
            ) : loadingType === "code_generation" ? (
              <CodeTemplateAnimation key="code-gen" />
            ) : (
              <DefaultPulseCore
                key="default"
                icon={config.icon}
                color={config.color}
              />
            )}
          </AnimatePresence>
        </div>

        {/* TEXT CONTENT */}
        <div className="text-center space-y-2 z-10">
          <motion.h3
            className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${config.color}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {config.label}
          </motion.h3>
          <p className="text-slate-400 text-sm font-medium tracking-wide italic">
            {config.description}
          </p>
        </div>

        {/* MINIMALIST PROGRESS TRACKER */}
        <div className="w-full flex justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`h-1 rounded-full bg-gradient-to-r ${config.color}`}
              initial={{ width: 4 }}
              animate={{ width: [4, 24, 4] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* --- SUB-COMPONENTS FOR SPECIFIC INDENTS --- */

// 1. IMAGE GENERATION: The "Developing Photo" effect
function ImageTemplateAnimation({ color }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="relative w-32 h-32 border-2 border-white/10 rounded-xl overflow-hidden bg-slate-900 shadow-2xl"
    >
      {/* Animated gradient sweep representing 'painting' */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-t ${color} opacity-40`}
        animate={{ top: ["100%", "0%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      {/* Ghost shapes appearing */}
      <div className="absolute inset-0 flex flex-wrap p-2 gap-2">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="w-10 h-10 bg-white/5 rounded-lg"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-3xl">
        🎨
      </div>
    </motion.div>
  );
}

// 2. CODE GENERATION: The "Matrix Stream" effect
function CodeTemplateAnimation() {
  return (
    <div className="relative w-32 h-32 font-mono text-[8px] text-emerald-500/50 overflow-hidden bg-black rounded-xl border border-emerald-500/20 p-2 leading-tight">
      <motion.div
        animate={{ y: [0, -100] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        {`import { createAI } from 'orion';
const agent = new Agent();
async function solve() {
  const data = await agent.think();
  return process(data);
}
// Refactoring logic...
// Optimizing loops...
export default solve;`.repeat(5)}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 flex items-center justify-center text-3xl">
        💻
      </div>
    </div>
  );
}

// 3. DEFAULT: Pulse Core for General/Intent
function DefaultPulseCore({ icon, color }) {
  return (
    <motion.div
      className={`relative w-24 h-24 bg-gradient-to-br ${color} rounded-full flex items-center justify-center shadow-2xl`}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span className="text-4xl z-10">{icon}</span>
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/30"
        animate={{ scale: [1, 1.5], opacity: [1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  );
}
