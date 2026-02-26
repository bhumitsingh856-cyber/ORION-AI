# 🌌 Orion Studio

**Orion Studio** is a high-performance, agent-driven AI platform built with **Next.js 15** and **React 19**. It enables users to interact with advanced AI models that can process documents, browse the web, and maintain long-term memory through a specialized RAG (Retrieval-Augmented Generation) architecture.

---

### ✨ Core Features

* **🤖 Multi-Model Intelligence**: Seamless integration with **Google Gemini**, **Groq**, and **Hugging Face**.
* **🔍 Web-Enabled Agents**: Real-time web searching capabilities powered by **Tavily**.
* **📄 Document Intelligence**: PDF and Docx analysis using `pdf-parse` and `mammoth`.
* **💾 Persistent Memory**: Context-aware conversations stored in **MongoDB Atlas** with optimized serverless connection pooling.
* **⚡ Modern UI**: A sleek, responsive interface built with **Tailwind CSS**, **Framer Motion**, and **Lucide React**.
* **🔐 Secure Authentication**: User management and protected routes via **Clerk**.

---

### 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js  |
| **AUTHEMTICATION** | Clerk |
| **AI Framework** | LangChain |
| **Database** | MongoDB (Mongoose), Pinecone (Vector Search) |
| **State Management** | Zustand |
| **Styling** | Tailwind CSS, Motion |
| **Tools** | Axios, Cloudinary,Nodemailer , Zod |

---

### 🚀 Getting Started

#### 1. Installation
```bash
git clone [https://github.com/YOUR_USERNAME/orion-studio.git](https://github.com/YOUR_USERNAME/orion-studio.git)
cd orion-studio
npm install
2. Configuration
Create a .env.local file in the root directory:

Code snippet
MONGODB_URI=your_mongodb_uri
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret
GOOGLE_GENERATIVE_AI_API_KEY=your_key
GROQ_API_KEY=your_key
TAVILY_API_KEY=your_key
3. Development
Bash
npm run dev
🏗️ Architecture Architecture
Agentic RAG: Implements a Reasoning and Acting (ReAct) pattern to intelligently decide between database queries, web searches, or document analysis.

Real-time Streaming: Instant AI response delivery using modern streaming patterns.

👨‍💻 Author
BHUMIT SINGH Student Developer & AI Enthusiast 
