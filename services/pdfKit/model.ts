const getTheme = require("./theme");

export type ModelType = "courrier";

export interface CourrierModel {
  expediteur: string;
  destinataire: string;
  objet: string;
  texte: string;
  date: string;
  signature: string;
}

export const courrier = (content: CourrierModel, doc: any) => {
  const theme = getTheme(doc);

  doc.fontSize(10);

  theme.col({
    posY: 75,
    positionCol: 1,
    size: 3,
    content: content.expediteur,
    height: 320,
  });
  theme.col({
    posY: 75,
    positionCol: 3,
    size: 3,
    content: content.destinataire,
    height: 320,
    align: "right",
  });

  doc.text(content.objet, theme.bordGauche, 230);
  doc.text(content.texte, theme.bordGauche, 310);

  doc.moveDown();
  theme.col({
    posY: 570,
    positionCol: 1,
    size: 2,
    content: content.date,
    height: 180,
    stroke: true,
  });

  theme.col({
    posY: 570,
    positionCol: 3,
    size: 2,
    content: "Signature \n",
    img: content.signature,
    height: 180,
    stroke: true,
  });

  doc
    .fillColor("grey")
    .text("Édité par declarer-sinistre.fr", theme.bordGauche, 700);
};
