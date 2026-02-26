import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { DocxLoader } from "@langchain/community/document_loaders/fs/docx";

export async function docLoader(docurl) {
  const url = await fetch(docurl);
  const blob = await url.blob();
  const docType = url.headers.get("content-type");
  console.log("docType", docType);
  let loader;
  try {
    if (docType.includes("pdf")) {
      // pdf LOADER
      loader = new PDFLoader(blob, { splitPages: false });
      const data = await loader.load();
      const content = data[0].pageContent;
      const cleanedContent = content.replace(/\s+/g, " ").trim();
      return cleanedContent;
    } else if (
      docType.includes("doc") ||
      docType.includes("docx") ||
      docType.includes("msword")
    ) {
      // docx LOADER
      loader = new DocxLoader(blob, { splitPages: false });
      const data = await loader.load();
      const content = data[0].pageContent;
      const cleanedContent = content.replace(/\s+/g, " ").trim();

      return cleanedContent;
    } else {
      throw new Error("Unsupported document type");
    }
  } catch (error) {
    console.error("Error loading document:", error);
  }
}
// docLoader("https://res.cloudinary.com/dvrhfvoka/image/upload/v1771915995/z7umipuuzhn2moumxpaq.pdf");
// docLoader("https://res.cloudinary.com/dvrhfvoka/raw/upload/v1771924404/iev43ectvcz6gfmamoom.docx")
