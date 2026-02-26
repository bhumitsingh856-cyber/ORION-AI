// components/IntentLoadingState.jsx
"use client";
import { motion, AnimatePresence } from "framer-motion";

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
      description: "Analyzing your knowledge base...",
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
    <div className="relative w-full max-w-2xl mx-auto p-8">
      {/* DYNAMIC CONTENT AREA */}
      <div className="relative aspect-square max-w-md mx-auto">
        
        {/* 1. Background Glow (Universal) */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${config.color} opacity-20 blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 2. Intent-Specific Animations */}
        {loadingType === "image_generation" ? (
          <ImageTemplateAnimation color={config.color} />
        ) : loadingType === "code_generation" ? (
          <CodeTemplateAnimation />
        ) : loadingType === "RAG_query" ? (
          <RAGTemplateAnimation color={config.color} />
        ) : loadingType === "web_search" ? (
          <WebSearchAnimation color={config.color} />
        ) : loadingType === "image_analysis" ? (
          <ImageAnalysisAnimation color={config.color} />
        ) : (
          <DefaultPulseCore icon={config.icon} color={config.color} />
        )}
      </div>

      {/* TEXT CONTENT */}
      <motion.div
        className="text-center mt-8 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {config.label}
        </h3>
        <p className="text-gray-500 text-sm">{config.description}</p>
      </motion.div>

      {/* MINIMALIST PROGRESS TRACKER */}
      <div className="flex justify-center gap-2 mt-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full bg-gradient-to-r ${config.color}`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* --- SUB-COMPONENTS FOR SPECIFIC INTENTS --- */

// 1. IMAGE GENERATION: The "Developing Photo" effect
function ImageTemplateAnimation({ color }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer rotating ring */}
      <motion.div
        className={`absolute inset-8 rounded-2xl border-2 border-gradient-to-r ${color} opacity-30`}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{
          borderImage: "linear-gradient(to right, rgba(236,72,153,0.5), rgba(168,85,247,0.5)) 1",
        }}
      />

      {/* Animated gradient sweep representing 'painting' */}
      <motion.div
        className={`absolute inset-12 rounded-xl bg-gradient-to-r ${color} opacity-20`}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Ghost shapes appearing */}
      <div className="absolute inset-16 flex items-center justify-center">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-16 h-16 rounded-lg bg-gradient-to-br ${color} opacity-20`}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.cos((i * Math.PI) / 2) * 40 + 40}%`,
              top: `${Math.sin((i * Math.PI) / 2) * 40 + 40}%`,
            }}
          />
        ))}
      </div>

      {/* Center icon */}
      <motion.div
        className="text-6xl z-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        🎨
      </motion.div>
    </div>
  );
}

// 2. CODE GENERATION: The "Matrix Stream" effect
function CodeTemplateAnimation() {
  const codeLines = [
    "import { createAI } from 'orion';",
    "const agent = new Agent();",
    "async function solve() {",
    "  const data = await agent.think();",
    "  return process(data);",
    "}",
    "// Refactoring logic...",
    "// Optimizing loops...",
    "export default solve;",
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm border border-green-500/20">
      {/* Scrolling code lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 space-y-2 px-4 font-mono text-xs text-green-400/40"
          animate={{
            y: ["-100%", "0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="space-y-2">
              {codeLines.map((line, i) => (
                <motion.div
                  key={`${setIndex}-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.4] }}
                  transition={{
                    duration: 2,
                    delay: (setIndex * codeLines.length + i) * 0.1,
                    repeat: Infinity,
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Typing cursor effect */}
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-1 h-4 bg-green-400"
        animate={{
          opacity: [1, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
        }}
      />

      {/* Center icon */}
      <motion.div
        className="text-6xl z-10 relative"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        💻
      </motion.div>
    </div>
  );
}

// 3. RAG QUERY: Document scanning and vector search effect
function RAGTemplateAnimation({ color }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Orbiting document icons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.3,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <motion.div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-16 bg-gradient-to-br ${color} rounded-lg opacity-30 flex items-center justify-center`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <span className="text-2xl">📄</span>
          </motion.div>
        </motion.div>
      ))}

      {/* Vector search rays */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className={`absolute w-1 bg-gradient-to-t ${color} opacity-0`}
          style={{
            height: "40%",
            left: "50%",
            bottom: "50%",
            transformOrigin: "bottom",
            transform: `rotate(${i * 45}deg)`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}

      {/* Neural network nodes */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.circle
          cx="50%"
          cy="30%"
          r="4"
          className="fill-indigo-400"
          animate={{ r: [4, 6, 4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="70%"
          cy="50%"
          r="4"
          className="fill-violet-400"
          animate={{ r: [4, 6, 4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.circle
          cx="30%"
          cy="50%"
          r="4"
          className="fill-purple-400"
          animate={{ r: [4, 6, 4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />
        <motion.circle
          cx="50%"
          cy="70%"
          r="4"
          className="fill-pink-400"
          animate={{ r: [4, 6, 4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
        />
        
        {/* Connecting lines */}
        <motion.line
          x1="50%"
          y1="30%"
          x2="70%"
          y2="50%"
          className="stroke-indigo-400"
          strokeWidth="1"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.line
          x1="50%"
          y1="30%"
          x2="30%"
          y2="50%"
          className="stroke-violet-400"
          strokeWidth="1"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.line
          x1="70%"
          y1="50%"
          x2="50%"
          y2="70%"
          className="stroke-purple-400"
          strokeWidth="1"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />
        <motion.line
          x1="30%"
          y1="50%"
          x2="50%"
          y2="70%"
          className="stroke-pink-400"
          strokeWidth="1"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
        />
      </svg>

      {/* Center icon with pulse */}
      <motion.div
        className="text-6xl z-10 relative"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        📚
      </motion.div>

      {/* Search wave effect */}
      <motion.div
        className={`absolute inset-0 rounded-full border-4 border-indigo-500`}
        initial={{ scale: 0.5, opacity: 0.8 }}
        animate={{
          scale: [0.5, 1.5],
          opacity: [0.8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </div>
  );
}

// 4. WEB SEARCH: Radar scanning effect
function WebSearchAnimation({ color }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Radar circles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full border-2 border-orange-500/30`}
          style={{
            width: `${30 + i * 20}%`,
            height: `${30 + i * 20}%`,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Scanning beam */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className={`absolute left-1/2 top-1/2 w-1/2 h-1 bg-gradient-to-r ${color} opacity-50 origin-left`}
          style={{
            transformOrigin: "left center",
          }}
        />
      </motion.div>

      {/* Data points */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className={`absolute w-3 h-3 rounded-full bg-gradient-to-r ${color}`}
          style={{
            left: `${30 + Math.cos((i * Math.PI) / 4) * 40}%`,
            top: `${30 + Math.sin((i * Math.PI) / 4) * 40}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.25,
          }}
        />
      ))}

      {/* Center icon */}
      <motion.div
        className="text-6xl z-10"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        🌐
      </motion.div>
    </div>
  );
}

// 5. IMAGE ANALYSIS: Scanning grid effect
function ImageAnalysisAnimation({ color }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Scanning grid */}
      <div className="absolute inset-8 grid grid-cols-4 grid-rows-4 gap-2">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className={`bg-gradient-to-br ${color} rounded opacity-0`}
            animate={{
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Scanning line */}
      <motion.div
        className={`absolute left-8 right-8 h-1 bg-gradient-to-r ${color} opacity-80`}
        animate={{
          top: ["10%", "90%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Corner brackets */}
      {["top-8 left-8", "top-8 right-8", "bottom-8 left-8", "bottom-8 right-8"].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} w-8 h-8 border-2 ${color.includes('blue') ? 'border-blue-400' : 'border-cyan-400'}`}
          style={{
            borderWidth: i === 0 || i === 1 ? "2px 2px 0 0" : "0 0 2px 2px",
            borderRadius: i === 0 ? "8px 0 0 0" : i === 1 ? "0 8px 0 0" : i === 2 ? "0 0 0 8px" : "0 0 8px 0",
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Center icon */}
      <motion.div
        className="text-6xl z-10"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        🔍
      </motion.div>
    </div>
  );
}

// 6. DEFAULT: Enhanced Pulse Core for General/Intent
function DefaultPulseCore({ icon, color }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Multiple pulsing rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full border-2 bg-gradient-to-r ${color}`}
          style={{
            width: `${40 + i * 25}%`,
            height: `${40 + i * 25}%`,
            opacity: 0.2,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Orbiting particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.3,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className={`absolute top-0 left-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
          />
        </motion.div>
      ))}

      {/* Center icon */}
      <motion.div
        className="text-6xl z-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        {icon}
      </motion.div>
    </div>
  );
}