import { courrier, ModelType } from "./model";

const fs = require("fs");
const PDFDocument = require("pdfkit");

export interface pdfFormat<Model> {
  path: string;
  content: Model;
  info: {
    Producer: string;
    Creator: string;
    Author: string;
    ModDate: Date;
    Title: string;
    Subject: string;
  };
  model: ModelType;
}

const generatePdf = async (pdfFormat: pdfFormat<any>) => {
  const doc = await new PDFDocument();

  try {
    await doc.pipe(fs.createWriteStream(pdfFormat.path));
  } catch (e) {
    throw new Error(e);
  }
  doc.info = {
    ...doc.info,
    ...pdfFormat.info,
  };
  pdfFormat.model === "courrier" && courrier(pdfFormat.content, doc);

  await doc.end();
  return pdfFormat.path;
};

module.exports = generatePdf;
