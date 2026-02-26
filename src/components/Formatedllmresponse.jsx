"use client";
import copy from "copy-to-clipboard";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
const Formatedllmresponse = memo(({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // 1. Handling Code Blocks (Fenced code)
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          const language = match ? match[1] : "";

          return !inline && language ? (
            <div className="my-4 rounded-lg border min-w-0 border-gray-700 ">
              {/* Language Label */}
              <div className="bg-stone-900 px-4 py-1.5 text-[10px] tracking-wider text-gray-300 font-mono border- flex justify-between items-center ">
                {language}
                <button
                  onClick={() => copy(String(children))}
                  className=" bg-gray-800 cursor-pointer hover:scale-110 hover:bg-gray-700 border border-gray-600 px-2 py-1 rounded text-[10px] text-white duration-200 active:scale-95"
                >
                  Copy
                </button>
              </div>
              <div className="bg-linear-to-r from-transparent via-white/80 to-transparent h-[1px]"></div>
              {/* Syntax Highlighter */}
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={language}
                PreTag="div"
                customStyle={{
                  margin: 0,
                  maxWidth: "90vw",
                  padding: "1rem",
                  background: "#14139",
                  fontSize: "0.875rem",
                }}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>

              {/* Copy Button */}
            </div>
          ) : (
            <code
              className="bg-zinc-800 whitespace-pre-wrap text-sky-400  px-1.5 py-0.5 rounded font-mono text-xs"
              {...props}
            >
              {children}
            </code>
          );
        },

        // 2. Prevent Hydration Error: Render 'p' as 'div'
        // This prevents block elements like <div> (from SyntaxHighlighter)
        // from being nested inside <p> tags.
        p({ children }) {
          return (
            <div className="mb-4  last:mb-0 leading-relaxed">{children}</div>
          );
        },

        // 3. Optimized Links
        a({ node, children, ...props }) {
          return (
            <Link
              className="text-cyan-400 hover:text-sky-500 underline underline-offset-4 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {children}
            </Link>
          );
        },

        // 4. Headings
        h1: ({ children }) => (
          <h1 className="text-2xl font-bold mt-6 mb-2 text-white">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl font-bold mt-5 mb-2 text-white">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg font-semibold mt-4 mb-1 text-white">
            {children}
          </h3>
        ),

        // 5. Lists
        ul: ({ children }) => (
          <ul className="list-disc list-inside  my-4  space-y-2">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside my-4  space-y-2">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="ml-2 text-gray-200 ">
            {children}
          </li>
        ),

        // 6. Blockquotes
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-cyan-500 bg-gray-900/50 px-4 py-2 my-4 italic text-gray-300 rounded-r">
            {children}
          </blockquote>
        ),

        // 7. Tables
        table: ({ children }) => (
          <div className="overflow-x-auto max-w-[90vw] my-6 rounded-lg border-2 border-zinc-700">
            <table className="max-w-full divide-y divide-gray-700 ">
              {children}
            </table>
          </div>
        ),
        th: ({ children }) => (
          <th className="px-4 py-2 bg-linear-to-r from-zinc-800   border-zinc-800 via-stone-800 to-zinc-800 text-center text-xs font-semibold uppercase tracking-wider text-gray-300">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-2 border-t border-zinc-700 text-sm text-gray-300">
            {children}
          </td>
        ),
        // 8. Custom Image Rendering
        img({ node, ...props }) {
          return (
            <div className="my-4 flex">
              <Image
                src={props?.src}
                alt={props?.alt || "AI generated content"}
                width={700} // This acts as the max-width
                height={400}
                className="rounded-xl border border-gray-500 shadow-[0_0_5px_white] object-contain  h-auto"
                unoptimized={true} // Usually better for dynamic Cloudinary AI images
              />
            </div>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
});

export default Formatedllmresponse;
