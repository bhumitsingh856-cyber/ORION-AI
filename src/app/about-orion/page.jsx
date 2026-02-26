"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Database, Eye, Terminal, Brain, Network,
  Sparkles, ArrowRight, Zap, Shield, Cpu, User
} from "lucide-react";

const TECH_STACK = [
  { label: "Auth",          name: "Clerk",            color: "text-violet-400", dot: "bg-violet-400" },
  { label: "Framework",     name: "Next.js",           color: "text-zinc-200",  dot: "bg-zinc-200"  },
  { label: "Animation",     name: "Framer Motion",     color: "text-purple-400", dot: "bg-purple-400"},
  { label: "Database",      name: "MongoDB",           color: "text-green-400", dot: "bg-green-400" },
  { label: "Vector DB",     name: "Pinecone",          color: "text-sky-400",   dot: "bg-sky-400"   },
  { label: "Orchestration", name: "LangChain JS",      color: "text-orange-400",dot: "bg-orange-400"},
  { label: "Embeddings",    name: "Gemini",            color: "text-yellow-400",dot: "bg-yellow-400"},
  { label: "Image Gen",     name: "FLUX.1-schnell",    color: "text-pink-400",  dot: "bg-pink-400"  },
  { label: "Vision",        name: "Qwen2.5-VL-72B",   color: "text-violet-300",dot: "bg-violet-300"},
  { label: "Web Search",    name: "Tavily",            color: "text-emerald-400",dot:"bg-emerald-400"},
  { label: "State",         name: "Zustand",           color: "text-rose-400",  dot: "bg-rose-400"  },
  { label: "Memory",        name: "RAG Pipeline",      color: "text-blue-400",  dot: "bg-blue-400"  },
];

const LOGS = [
  "▶ AUTH_MODULE :: CLERK_SESSION_VALIDATED",
  "▶ VISION_ENGINE :: QWEN2.5-VL-72B :: ONLINE",
  "▶ IMAGE_GEN :: FLUX.1-SCHNELL :: READY",
  "▶ MEMORY_LAYER :: PINECONE_RAG :: SYNCED",
  "▶ SEARCH_ENGINE :: TAVILY :: GROUNDED",
  "▶ ORCHESTRATOR :: LANGCHAIN_JS :: ACTIVE",
  "▶ EMBEDDINGS :: GEMINI_EMBED :: READY",
  "▶ STATE_MANAGER :: ZUSTAND :: LIVE",
];

const CAPABILITIES = [
  { icon: Eye,      title: "Vision Intelligence",     subtitle: "Qwen2.5-VL-72B",   desc: "Hyperbolic-tuned 72B vision model for deep multimodal document and image analysis.", border: "border-violet-500/30 hover:border-violet-400/60", iconWrap: "bg-violet-500/10 border border-violet-500/20", iconColor: "text-violet-400", sub: "text-violet-400", top: "from-violet-500/50" },
  { icon: Sparkles, title: "Image Synthesis",         subtitle: "FLUX.1-schnell",    desc: "Lightning-fast photorealistic generation via Black Forest Labs' cutting-edge diffusion model.", border: "border-pink-500/30 hover:border-pink-400/60", iconWrap: "bg-pink-500/10 border border-pink-500/20", iconColor: "text-pink-400", sub: "text-pink-400", top: "from-pink-500/50" },
  { icon: Globe,    title: "Real-Time Grounding",     subtitle: "Tavily Search",     desc: "Live web retrieval pipeline keeping every response anchored to current world knowledge.", border: "border-emerald-500/30 hover:border-emerald-400/60", iconWrap: "bg-emerald-500/10 border border-emerald-500/20", iconColor: "text-emerald-400", sub: "text-emerald-400", top: "from-emerald-500/50" },
  { icon: Database, title: "Vector Memory",           subtitle: "Pinecone RAG",      desc: "Semantic long-term memory enabling context recall across entire document corpora.", border: "border-sky-500/30 hover:border-sky-400/60", iconWrap: "bg-sky-500/10 border border-sky-500/20", iconColor: "text-sky-400", sub: "text-sky-400", top: "from-sky-500/50" },
  { icon: Brain,    title: "Gemini Embeddings",       subtitle: "Google AI",         desc: "State-of-the-art dense embeddings for high-fidelity semantic search and retrieval.", border: "border-yellow-500/30 hover:border-yellow-400/60", iconWrap: "bg-yellow-500/10 border border-yellow-500/20", iconColor: "text-yellow-400", sub: "text-yellow-400", top: "from-yellow-500/50" },
  { icon: Network,  title: "LangChain Orchestration", subtitle: "Reasoning Loops",   desc: "Multi-step agentic pipelines with tool-use, memory, and structured output parsing.", border: "border-orange-500/30 hover:border-orange-400/60", iconWrap: "bg-orange-500/10 border border-orange-500/20", iconColor: "text-orange-400", sub: "text-orange-400", top: "from-orange-500/50" },
];

const PIPELINE = ["User Query","Clerk Auth","Tavily Search","Gemini Embed","Pinecone Recall","LangChain Loop","Qwen Vision","FLUX Gen","Response"];

export default function AboutOrion() {
  const [logIndex, setLogIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setLogIndex(i => (i + 1) % LOGS.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-[#e8e8f0] overflow-x-hidden" style={{ fontFamily: "'JetBrains Mono','Fira Code',monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700;800&family=Syne:wght@700;800&display=swap');
        .syne{font-family:'Syne',sans-serif;}
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes gpulse{0%,100%{opacity:.03}50%{opacity:.07}}
        @keyframes orb1{0%{transform:scale(1);opacity:.18}100%{transform:scale(1.3);opacity:.07}}
        @keyframes orb2{0%{transform:scale(1);opacity:.12}100%{transform:scale(1.2);opacity:.05}}
        .shimmer-name{background:linear-gradient(90deg,#c084fc,#f472b6,#38bdf8,#c084fc);background-size:300% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 4s linear infinite;}
        .cursor{animation:blink 1s step-end infinite;}
        .bg-grid{background-image:linear-gradient(rgba(167,139,250,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,.04) 1px,transparent 1px);background-size:48px 48px;animation:gpulse 6s ease-in-out infinite;}
        .orb1{animation:orb1 9s ease-in-out infinite alternate;}
        .orb2{animation:orb2 11s ease-in-out infinite alternate-reverse;}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:#030303;}
        ::-webkit-scrollbar-thumb{background:#7c3aed;border-radius:2px;}
      `}</style>

      {/* BG */}
      <div className="bg-grid fixed inset-0 pointer-events-none z-0" />
      <div className="orb1 fixed top-[12%] left-[5%] w-[500px] h-[500px] rounded-full pointer-events-none z-0" style={{background:"radial-gradient(circle,rgba(124,58,237,.2) 0%,transparent 70%)"}}/>
      <div className="orb2 fixed bottom-[8%] right-[3%] w-[380px] h-[380px] rounded-full pointer-events-none z-0" style={{background:"radial-gradient(circle,rgba(244,114,182,.12) 0%,transparent 70%)"}}/>

      {/* NAV */}
      <nav className="relative z-20 flex items-center justify-between px-6 sm:px-10 py-5 border-b border-white/[.06] bg-[rgba(3,3,3,.8)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_#7c3aed]" />
          <span className="syne text-sm font-black tracking-widest text-[#f0f0f8]">ORION <span className="text-violet-500">STUDIO</span></span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
         
          <a href="/about-architect" className="flex items-center gap-2 text-[10px] tracking-[.25em] text-zinc-400 font-bold uppercase border border-white/[.08] px-3 py-1 rounded bg-white/[.04] hover:border-violet-400/40 hover:text-violet-300 transition-all duration-200">
            <User size={12} /> The Architect
          </a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">

        {/* SIDEBAR */}
        <aside className="w-full lg:w-[340px] lg:min-w-[340px] lg:h-[calc(100vh-64px)] lg:sticky lg:top-16 lg:overflow-y-auto flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/[.07] bg-[rgba(6,6,10,.9)] backdrop-blur-xl">
          <div className="flex flex-col gap-6">
            <motion.div initial={{opacity:0,x:-14}} animate={{opacity:1,x:0}} transition={{duration:.5}} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] shrink-0"/>
              <span className="text-[10px] tracking-[.35em] text-zinc-500 font-bold uppercase">All Systems Operational</span>
            </motion.div>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.1}}>
              <p className="text-[10px] tracking-[.35em] text-zinc-600 font-bold uppercase mb-3">Product</p>
              <div className="syne text-4xl sm:text-5xl font-black leading-none text-[#f0f0f8] mb-1">ORION</div>
              <div className="syne text-4xl sm:text-5xl font-black leading-none shimmer-name mb-4">STUDIO</div>
              <p className="text-[11px] tracking-[.18em] text-zinc-400 font-semibold uppercase leading-relaxed">
                Multimodal AI Platform<br/>
                <span className="text-violet-500">Powered by LangChain JS</span>
              </p>
            </motion.div>

            <motion.blockquote initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3}} className="border-l-2 border-violet-600 pl-4 pr-4 py-4 bg-violet-500/[.06] rounded-r-lg text-[12px] leading-[1.85] text-[#d0d0e8] italic">
              "A production-grade reasoning engine that sees, recalls, searches, and generates — all in one orchestrated loop."
            </motion.blockquote>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.45}} className="bg-[#050508] border border-violet-600/30 rounded-lg p-4 shadow-[0_0_20px_rgba(124,58,237,.12)]">
              <div className="flex items-center gap-2 mb-3 opacity-60">
                <div className="flex gap-[5px]">
                  {["#ff5f57","#febc2e","#28c840"].map((c,i)=><div key={i} className="w-2 h-2 rounded-full" style={{background:c}}/>)}
                </div>
                <span className="text-[9px] text-zinc-500 tracking-[.2em]">ORION_RUNTIME.log</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={logIndex} initial={{opacity:0,y:4}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-4}} transition={{duration:.25}} className="text-[11px] text-violet-400 tracking-wide">
                  {LOGS[logIndex]}<span className="cursor text-violet-400">_</span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <div className="grid grid-cols-3 gap-3">
              {[{n:"3+",l:"Models"},{n:"RAG",l:"Memory"},{n:">>",l:"Context"}].map(s=>(
                <div key={s.l} className="flex flex-col items-center p-3 rounded-lg bg-white/[.04] border border-white/[.07]">
                  <span className="syne text-lg font-black text-violet-400">{s.n}</span>
                  <span className="text-[9px] text-zinc-500 tracking-widest uppercase mt-1">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a href="/about-architect" className="flex items-center justify-between px-5 py-4 rounded-xl bg-gradient-to-r from-violet-600/20 to-pink-600/10 border border-violet-500/25 hover:border-violet-400/50 transition-all duration-200 group">
            <div>
              <p className="text-[11px] font-bold text-zinc-300 tracking-[.1em] uppercase">Meet the Architect</p>
              <p className="text-[10px] text-zinc-600 mt-1">Bhumit Singh</p>
            </div>
            <ArrowRight size={16} className="text-violet-400 group-hover:translate-x-1 transition-transform duration-200"/>
          </a>
        </aside>

        {/* MAIN */}
        <main className="flex-1 min-w-0 p-6 sm:p-10 lg:p-14 xl:p-16 space-y-16 sm:space-y-20">

          {/* 01 Intro */}
          <motion.section initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.2}}>
            <p className="text-[10px] text-violet-500 font-bold tracking-[.4em] uppercase mb-5">01 // What is Orion Studio</p>
            <h2 className="syne text-3xl sm:text-4xl lg:text-5xl font-black text-[#f0f0f8] leading-tight mb-5">
              The AI Studio That<br/><span className="text-violet-500">Thinks in Loops</span>
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.9] text-[#b0b0c8] max-w-xl">
              Orion Studio is not a chatbot wrapper. It is a full-stack multimodal intelligence platform — fusing real-time web search, persistent vector memory, vision understanding, and image generation into a single cohesive reasoning loop orchestrated by <strong className="text-[#e2e2f0]">LangChain JS</strong>.
            </p>
          </motion.section>

          {/* 02 Stack */}
          <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.35}}>
            <p className="text-[10px] text-violet-500 font-bold tracking-[.4em] uppercase mb-6">02 // Neural Stack</p>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((t,i)=>(
                <motion.div key={t.name} initial={{opacity:0,scale:.85}} animate={{opacity:1,scale:1}} transition={{delay:.04*i+.35}}
                  className="inline-flex items-center gap-[6px] px-3 py-[5px] rounded border border-white/[.08] bg-white/[.04] text-[10px] font-bold tracking-[.08em] uppercase hover:bg-violet-500/15 hover:border-violet-400/40 transition-all duration-200 cursor-default">
                  <div className={`w-[6px] h-[6px] rounded-full shrink-0 ${t.dot}`}/>
                  <span className="text-zinc-500">{t.label}:</span>
                  <span className={t.color}>{t.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 03 Capabilities */}
          <section>
            <p className="text-[10px] text-violet-500 font-bold tracking-[.4em] uppercase mb-6">03 // System Capabilities</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {CAPABILITIES.map((cap,i)=>(
                <motion.div key={cap.title} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.08*i+.4}}
                  className={`relative overflow-hidden p-6 bg-white/[.025] border rounded-xl transition-all duration-300 ${cap.border}`}>
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${cap.top} via-transparent to-transparent`}/>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${cap.iconWrap}`}>
                    <cap.icon size={18} className={cap.iconColor}/>
                  </div>
                  <p className="syne text-[15px] font-bold text-[#e8e8f4] mb-1">{cap.title}</p>
                  <p className={`text-[10px] font-bold tracking-[.12em] uppercase mb-3 ${cap.sub}`}>{cap.subtitle}</p>
                  <p className="text-[12px] leading-[1.75] text-zinc-400">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>


          {/* Footer */}
          <footer className="pt-8 border-t border-white/[.07] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <span className="text-[10px] text-zinc-600 tracking-[.25em] font-bold uppercase">Next.js // LangChain // Pinecone // MongoDB</span>
            <span className="text-[10px] text-violet-600 tracking-[.25em] font-bold">©2026 ORION STUDIO</span>
          </footer>
        </main>
      </div>
    </div>
  );
}