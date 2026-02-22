 
function EmptyChat() {
  return (
    <div className="flex justify-center flex-col gap-8 text-center items-center h-screen">
      {/* Animated Orion Logo */}
      <div className="relative">
        {/* The Main AI SVG */}
        <svg
          viewBox="0 0 100 100"
          className="relative w-20 h-20 drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" /> {/* Purple-400 */}
              <stop offset="100%" stopColor="#22d3ee" /> {/* Cyan-400 */}
            </linearGradient>

            <filter id="innerGlow">
              <feFlood floodColor="white" floodOpacity="0.5" result="flood" />
              <feComposite
                in="flood"
                result="mask"
                in2="SourceGraphic"
                operator="in"
              />
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Ring */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#aiGradient)"
            strokeWidth="2"
            strokeDasharray="15 10"
            className="animate-[spin_10s_linear_infinite]"
          />

          {/* Inner Core Shapes */}
          <path
            d="M50 25C36.1929 25 25 36.1929 25 50C25 63.8071 36.1929 75 50 75C63.8071 75 75 63.8071 75 50C75 36.1929 63.8071 25 50 25Z"
            fill="url(#aiGradient)"
            filter="url(#innerGlow)"
            className="animate-pulse"
          />
          {/* Center Star/Spark */}
          <path
            d="M50 40L53 47L60 50L53 53L50 60L47 53L40 50L47 47L50 40Z"
            fill="white"
            className="animate-bounce"
          />
        </svg>
        {/* Floating particles */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping [animation-delay:0.5s]"></div>
        <div className="absolute top-1/2 -right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping [animation-delay:1s]"></div>
      </div>

      {/* Welcome Message */}
      <div className="space-y-4 max-w-2xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Where logic meets imagination
          </span>
        </h2>
        <p className="text-lg text-gray-400">
          Ask me anything, and I'll help you find answers, generate content, or
          solve problems.
        </p>
      </div>

      {/* Suggestion Prompts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl px-4">
        <button className="text-left p-4 cursor-pointer bg-gradient-to-br from-stone-800/40 to-stone-800/20 hover:from-blue-500/20 hover:to-purple-500/20 border border-stone-700/50 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
          <div className="flex items-start gap-3">
            <div className="text-2xl hover:scale-110 transition-transform">
              💡
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-200 mb-1">
                Explain a concept
              </p>
              <p className="text-xs text-gray-500">Break down complex topics</p>
            </div>
          </div>
        </button>
        <button className="text-left p-4 cursor-pointer bg-gradient-to-br from-stone-800/40 to-stone-800/20 hover:from-blue-500/20 hover:to-purple-500/20 border border-stone-700/50 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
          <div className="flex items-start gap-3">
            <div className="text-2xl hover:scale-110 transition-transform">
              ✍️
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-200 mb-1">
                Write content
              </p>
              <p className="text-xs text-gray-500">
                Create articles, emails, or posts
              </p>
            </div>
          </div>
        </button>

        <button className="text-left p-4 cursor-pointer bg-gradient-to-br from-stone-800/40 to-stone-800/20 hover:from-blue-500/20 hover:to-purple-500/20 border border-stone-700/50 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
          <div className="flex items-start gap-3">
            <div className="text-2xl hover:scale-110 transition-transform">
              💻
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-200 mb-1">
                Help with code
              </p>
              <p className="text-xs text-gray-500">
                Debug, optimize, or explain code
              </p>
            </div>
          </div>
        </button>

        <button className="text-left p-4 cursor-pointer bg-gradient-to-br from-stone-800/40 to-stone-800/20 hover:from-blue-500/20 hover:to-purple-500/20 border border-stone-700/50 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
          <div className="flex items-start gap-3">
            <div className="text-2xl hover:scale-110 transition-transform">
              🔍
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-200 mb-1">
                Research topics
              </p>
              <p className="text-xs text-gray-500">
                Find information and insights
              </p>
            </div>
          </div>
        </button>
      </div>

      {/* Helper Text */}
      <p className="text-sm text-gray-600 mt-4">
        Just type your question below to get started
      </p>
    </div>
  );
}

export default EmptyChat;
