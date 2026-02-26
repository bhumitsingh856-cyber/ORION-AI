import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import connectDB from "@/lib/db";

connectDB();
import Navbar from "@/components/Navabar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Orion Studio",
  description: "A gen AI tool",
  icons: {
    icon: "/orion.png",
    apple: "/orion.png",  
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header>
            <Navbar></Navbar>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
