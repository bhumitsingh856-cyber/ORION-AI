import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
} from "@clerk/nextjs";
const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 backdrop-blur-3xl border-b border-white/10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              <span className="text-white font-bold text-lg sm:text-xl">O</span>
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              ORION STUDIO
            </span>
          </div>

          <div>
        
          </div>
          {/* Desktop Menu
          <div className="hidden md:flex items-center gap-8">
          
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="#docs"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Docs
            </a>
          </div> */}

          {/* CTA Buttons */}

          {/* Show the sign-in and sign-up buttons when the user is signed out */}
          <div className="flex gap-2">
            <SignedOut>
              <SignInButton
              forceRedirectUrl="/page1"
              >  
                <button className="px-4 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton
              forceRedirectUrl="/page1"
              >
                <button className="px-4 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            {/* Show the user button when the user is signed in */}
            
          </div>
        </div>
      </div>

      {/* Glowing bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-sm"></div>
      </div>
    </nav>
  );
};

export default Navbar;
