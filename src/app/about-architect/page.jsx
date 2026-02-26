"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Instagram, ArrowRight, ArrowUpRight,
  Terminal, ExternalLink, Code2, Layers, Cpu, Zap, Globe, ChevronRight
} from "lucide-react";

const SKILLS = [
  { category: "Frontend",      items: ["React","Next.js","Framer Motion","Tailwind CSS","HTML/CSS"],   color: "text-violet-400", dot: "bg-violet-400", border: "border-violet-500/20", bg: "bg-violet-500/5" },
  { category: "Backend",       items: ["Node.js","Express.js","REST APIs","MongoDB","Mongoose"],        color: "text-sky-400",    dot: "bg-sky-400",    border: "border-sky-500/20",    bg: "bg-sky-500/5"    },
  { category: "AI / Gen AI",   items: ["LangChain JS","Pinecone","RAG Systems","Gemini","Qwen2.5-VL","FLUX.1"], color: "text-pink-400", dot: "bg-pink-400", border: "border-pink-500/20", bg: "bg-pink-500/5" },
  { category: "Tools & Auth",  items: ["Clerk","Zustand","Tavily","Git","Vercel","GitHub"],             color: "text-emerald-400",dot: "bg-emerald-400",border: "border-emerald-500/20",bg: "bg-emerald-500/5"},
];

const PROJECTS = [
  {
    name: "Orion Studio",
    tag: "AI Platform",
    desc: "Production-grade multimodal AI studio featuring RAG memory, Qwen2.5-VL vision, FLUX image generation, and Tavily web search — all orchestrated via LangChain JS.",
    stack: ["Next.js","LangChain JS","Pinecone","MongoDB","FLUX.1","Qwen2.5-VL","Tavily","Clerk"],
    status: "Live",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-500/30",
    accent: "border-violet-500/30 hover:border-violet-400/60",
    topLine: "from-violet-500/60",
    iconColor: "text-violet-400",
    link: null,
  },
  {
    name: "Orbit",
    tag: "Social Media App",
    desc: "A full-stack social media application with real-time feeds, user authentication, media uploads, and interactive profiles. Clean, fast, and built for scale.",
    stack: ["MERN","MongoDB","JWT AUTH","Tailwind CSS","Framer Motion"],
    status: "Live",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-500/30",
    accent: "border-sky-500/30 hover:border-sky-400/60",
    topLine: "from-sky-500/60",
    iconColor: "text-sky-400",
    link: "https://orbit-seven-pink.vercel.app/",
  },
];

const LOGS = [
  "▶ IDENTITY :: BHUMIT_SINGH :: AUTHENTICATED",
  "▶ STACK :: MERN + GEN_AI :: LOADED",
  "▶ PROJECTS :: ORION + ORBIT :: DEPLOYED",
  "▶ SKILLS :: FULLSTACK + AI :: ONLINE",
  "▶ STATUS :: BUILDING :: IN_PROGRESS",
];

const SOCIALS = [
  { icon: Github,    label: "GitHub",    href: "https://github.com/bhumitsingh856-cyber",                           handle: "bhumitsingh856-cyber" },
  { icon: Linkedin,  label: "LinkedIn",  href: "https://linkedin.com/in/bhumit-singh-220015327",                    handle: "bhumit-singh-220015327" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/crazyx148?igsh=MXk5enR5MGdobDd2", handle: "@crazyx148" },
];

export default function AboutArchitect() {
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
        @keyframes orb1{0%{transform:scale(1);opacity:.15}100%{transform:scale(1.3);opacity:.06}}
        @keyframes orb2{0%{transform:scale(1);opacity:.10}100%{transform:scale(1.2);opacity:.04}}
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
      <div className="bg-grid fixed inset-0 pointer-events-none z-0"/>
      <div className="orb1 fixed top-[10%] right-[8%] w-[480px] h-[480px] rounded-full pointer-events-none z-0" style={{background:"radial-gradient(circle,rgba(124,58,237,.18) 0%,transparent 70%)"}}/>
      <div className="orb2 fixed bottom-[10%] left-[3%] w-[360px] h-[360px] rounded-full pointer-events-none z-0" style={{background:"radial-gradient(circle,rgba(56,189,248,.1) 0%,transparent 70%)"}}/>

      {/* NAV */}
      <nav className="relative z-20 flex items-center justify-between px-6 sm:px-10 py-5 border-b border-white/[.06] bg-[rgba(3,3,3,.8)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_#7c3aed]"/>
          <span className="syne text-sm font-black tracking-widest text-[#f0f0f8]">ORION <span className="text-violet-500">STUDIO</span></span>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">

        {/* SIDEBAR */}
        <aside className="w-full lg:w-[340px] lg:min-w-[340px] lg:h-[calc(100vh-64px)] lg:sticky lg:top-16 lg:overflow-y-auto flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/[.07] bg-[rgba(6,6,10,.9)] backdrop-blur-xl">
          <div className="flex flex-col gap-6">

            {/* Avatar placeholder / identity */}
            <motion.div initial={{opacity:0,x:-14}} animate={{opacity:1,x:0}} transition={{duration:.5}} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] shrink-0"/>
              <span className="text-[10px] tracking-[.35em] text-zinc-500 font-bold uppercase">Identity Verified</span>
            </motion.div>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.1}}>
              <p className="text-[10px] tracking-[.35em] text-zinc-600 font-bold uppercase mb-3">Architect</p>
              <div className="syne text-4xl sm:text-5xl font-black leading-none text-[#f0f0f8] mb-1">BHUMIT</div>
              <div className="syne text-4xl sm:text-5xl font-black leading-none shimmer-name mb-4">SINGH</div>
              <p className="text-[11px] tracking-[.18em] text-zinc-400 font-semibold uppercase leading-loose">
                Full-Stack Engineer<br/>
                <span className="text-violet-500">Gen AI Builder</span>
              </p>
            </motion.div>

            {/* Bio quote */}
            <motion.blockquote initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3}} className="border-l-2 border-violet-600 pl-4 pr-4 py-4 bg-violet-500/[.06] rounded-r-lg text-[12px] leading-[1.85] text-[#d0d0e8] italic">
              "I build AI-native full-stack products — from smart RAG pipelines and multimodal vision systems to polished, production-grade web apps."
            </motion.blockquote>

            {/* Terminal */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.45}} className="bg-[#050508] border border-violet-600/30 rounded-lg p-4 shadow-[0_0_20px_rgba(124,58,237,.12)]">
              <div className="flex items-center gap-2 mb-3 opacity-60">
                <div className="flex gap-[5px]">
                  {["#ff5f57","#febc2e","#28c840"].map((c,i)=><div key={i} className="w-2 h-2 rounded-full" style={{background:c}}/>)}
                </div>
                <span className="text-[9px] text-zinc-500 tracking-[.2em]">BHUMIT_OS.log</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={logIndex} initial={{opacity:0,y:4}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-4}} transition={{duration:.25}} className="text-[11px] text-violet-400 tracking-wide">
                  {LOGS[logIndex]}<span className="cursor text-violet-400">_</span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[{n:"2+",l:"Projects"},{n:"NEXT JS",l:"Stack"},{n:"AI",l:"Native"}].map(s=>(
                <div key={s.l} className="flex flex-col items-center p-3 rounded-lg bg-white/[.04] border border-white/[.07]">
                  <span className="syne text-base font-black text-violet-400">{s.n}</span>
                  <span className="text-[9px] text-zinc-500 tracking-widest uppercase mt-1">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Socials full */}
          <div>
            <p className="text-[9px] tracking-[.35em] text-zinc-600 font-bold uppercase mb-4">Connect_Interface</p>
            <div className="flex flex-col gap-3">
              {SOCIALS.map(({icon:Icon, label, href, handle})=>(
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[.04] border border-white/[.08] text-zinc-400 hover:bg-violet-500/10 hover:border-violet-400/40 hover:text-violet-300 transition-all duration-200 group">
                  <Icon size={16} className="shrink-0"/>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-bold text-zinc-300 tracking-wide">{label}</span>
                    <span className="text-[9px] text-zinc-600 truncate">{handle}</span>
                  </div>
                  <ExternalLink size={11} className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"/>
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 min-w-0 p-6 sm:p-10 lg:p-14 xl:p-16 space-y-16 sm:space-y-20">

          {/* 01 Who */}
          <motion.section initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.2}}>
            <p className="text-[10px] text-violet-500 font-bold tracking-[.4em] uppercase mb-5">01 // Who is the Architect</p>
            <h2 className="syne text-3xl sm:text-4xl lg:text-5xl font-black text-[#f0f0f8] leading-tight mb-5">
              Engineer. Builder.<br/><span className="text-violet-500">AI Native.</span>
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.9] text-[#b0b0c8] max-w-xl">
              I am a full-stack engineer specializing in building AI-native products from the ground up. Combining deep MERN stack expertise with hands-on generative AI experience — RAG systems, multimodal models, and LLM orchestration.
            </p>
          </motion.section>

          {/* 02 Skills */}
          <section>
            <p className="text-[10px] text-violet-500 font-bold tracking-[.4em] uppercase mb-6">02 // Skills &amp; Expertise</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((s,i)=>(
                <motion.div key={s.category} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.08*i+.3}}
                  className={`p-6 rounded-xl border ${s.border} ${s.bg} transition-all duration-300 hover:border-opacity-60`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-2 h-2 rounded-full ${s.dot}`}/>
                    <p className={`text-[11px] font-bold tracking-[.2em] uppercase ${s.color}`}>{s.category}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map(item=>(
                      <span key={item} className="px-2 py-[3px] rounded text-[10px] font-semibold text-zinc-300 bg-white/[.06] border border-white/[.08]">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 03 Projects */}
          <section>
            <p className="text-[10px] text-violet-500 font-bold tracking-[.4em] uppercase mb-6">03 // Projects &amp; Work</p>
            <div className="flex flex-col gap-6">
              {PROJECTS.map((p,i)=>(
                <motion.div key={p.name} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.1*i+.35}}
                  className={`relative overflow-hidden p-6 sm:p-8 bg-white/[.025] border rounded-2xl transition-all duration-300 ${p.accent}`}>
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${p.topLine} via-transparent to-transparent`}/>

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="syne text-xl sm:text-2xl font-black text-[#f0f0f8]">{p.name}</h3>
                        <span className={`text-[9px] font-bold tracking-[.15em] uppercase px-2 py-[3px] rounded border ${p.statusColor}`}>{p.status}</span>
                      </div>
                      <p className={`text-[10px] font-bold tracking-[.15em] uppercase ${p.iconColor}`}>{p.tag}</p>
                    </div>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[.06] border border-white/[.1] text-[10px] font-bold text-zinc-300 hover:bg-violet-500/15 hover:border-violet-400/40 hover:text-violet-300 transition-all duration-200">
                        <ExternalLink size={12}/> View Live
                      </a>
                    )}
                  </div>

                  <p className="text-[13px] leading-[1.85] text-[#c0c0d4] mb-5">{p.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {p.stack.map(tech=>(
                      <span key={tech} className="px-2 py-[3px] rounded text-[10px] font-semibold text-zinc-400 bg-white/[.05] border border-white/[.07]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 04 CTA to Orion */}
          <section>
            <p className="text-[10px] text-violet-500 font-bold tracking-[.4em] uppercase mb-6">04 // The Product</p>
            <a href="/about-orion"
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-900/15 via-pink-900/5 to-transparent hover:border-violet-400/40 transition-all duration-300 group">
              <div>
                <h3 className="syne text-xl sm:text-2xl font-black text-[#f0f0f8] mb-2">Explore Orion Studio</h3>
                <p className="text-[13px] leading-relaxed text-[#b0b0c8] max-w-md">
                  Dive deep into the AI platform I engineered — its neural stack, RAG architecture, and multimodal capabilities.
                </p>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-300 font-bold text-[11px] tracking-[.1em] uppercase whitespace-nowrap group-hover:bg-violet-600/30 transition-all duration-200">
                About Orion <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200"/>
              </div>
            </a>
          </section>

          {/* Footer */}
          <footer className="pt-8 border-t border-white/[.07] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <span className="text-[10px] text-zinc-600 tracking-[.25em] font-bold uppercase">MERN // Gen AI // LangChain // RAG</span>
            <span className="text-[10px] text-violet-600 tracking-[.25em] font-bold">©2026 BHUMIT SINGH</span>
          </footer>
        </main>
      </div>
    </div>
  );
}