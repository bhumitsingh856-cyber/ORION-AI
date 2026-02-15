import { SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
const Navbar = async () => {
  const user = await currentUser();
  return (
    <div className="fixed z-50 right-0 p-2 flex gap-2">
      {!user && (
        <SignedOut>
          <SignInButton forceRedirectUrl="/page1">
            <button className="px-4 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton forceRedirectUrl="/page1">
            <button className="px-4 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
      )}
    </div>
  );
};

export default Navbar;
