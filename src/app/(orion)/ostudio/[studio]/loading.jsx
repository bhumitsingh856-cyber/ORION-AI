const Loading = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-[#0a0a0b] text-white overflow-hidden">
      
      {/* 1. TOP HEADING (Centered as per your screenshot) */}
      <div className="w-full py-6 flex justify-center shrink-0">
        <div className="h-8 w-48 bg-zinc-800/50 rounded-lg animate-pulse" />
      </div>

      {/* 2. MESSAGES AREA */}
      <div className="flex-1 px-4 overflow-y-auto space-y-8">
        
        {/* User Message (Right Side) */}
        <div className="flex flex-col items-end gap-2 pr-2">
          <div className="flex items-center gap-2">
             <div className="h-8 w-24 bg-zinc-800 rounded-2xl animate-pulse" />
             <div className="h-8 w-8 rounded-full bg-cyan-600/40 animate-pulse" />
          </div>
        </div>

        {/* AI Response (Left Side) */}
        <div className="space-y-4 max-w-[90%] md:max-w-[80%]">
          {/* AI Header Line */}
          <div className="flex items-center gap-2 mb-2">
             <div className="h-6 w-6 rounded bg-blue-500/80 animate-pulse" />
             <div className="h-4 w-20 bg-zinc-800 rounded animate-pulse" />
          </div>

          {/* Text Content Skeleton */}
          <div className="space-y-2 pl-1">
            <div className="h-4 w-64 bg-zinc-800/60 rounded animate-pulse" />
          </div>

          {/* THE IMAGE BOX (Full width of message, rounded edges) */}
          <div className="w-full aspect-[16/7] bg-black/40 border border-white/10 rounded-xl animate-pulse flex items-center justify-center">
             <div className="flex flex-col items-center gap-2 opacity-20">
                <div className="h-8 w-8 rounded-md bg-zinc-700" />
                <div className="h-2 w-32 bg-zinc-700 rounded" />
             </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 pr-2">
          <div className="flex items-center gap-2">
             <div className="h-8 w-24 bg-zinc-800 rounded-2xl animate-pulse" />
             <div className="h-8 w-8 rounded-full bg-cyan-600/40 animate-pulse" />
          </div>
        </div>

      {/* 3. FLOATING FOOTER (Input + Upload + Ask) */}
      <div className="p-4 pb-8 flex justify-center items-center gap-3 max-w-6xl mx-auto w-full">
        {/* Main Input Box */}
        <div className="flex-1 h-12 bg-zinc-900/80 border border-white/10 rounded-xl flex items-center px-4">
           <div className="h-3 w-32 bg-zinc-800 rounded animate-pulse" />
        </div>

        {/* Upload Button (Greenish circle in your shot) */}
        <div className="h-12 w-12 rounded-full bg-emerald-600/30 border border-emerald-500/20 animate-pulse shrink-0" />

        {/* Ask Button (Blue circle) */}
        <div className="h-12 w-16 md:w-20 rounded-full bg-blue-600 animate-pulse shrink-0 flex items-center justify-center">
           <div className="h-3 w-8 bg-white/20 rounded" />
        </div>
      </div>
    </div>
  );
};

export default Loading;