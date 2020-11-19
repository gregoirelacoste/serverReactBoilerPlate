interface ColProps {
  posY: number;
  positionCol: 1 | 2 | 3 | 4;
  size: 1 | 2 | 3 | 4;
  content: string;
  height?: number;
  wrap?: boolean;
  align?: "left" | "right" | "center";
  img?: string;
}

const getTheme = (doc: any) => {
  const fullwidth = 675;
  const bordGauche = 65;
  const width = fullwidth - bordGauche * 2;
  const colSize = (fullwidth - bordGauche * 2) / 4;
  const posX = (colNumber: number) => bordGauche + colSize * (colNumber - 1);
  return {
    width,
    bordGauche,
    colSize,
    posX: (colNumber: number) => posX(colNumber),
    col: ({ height = 150, ...props }: ColProps) => {
      let textColum = { columns: 2, columnGap: 10, height: 150 };
      const displayCol = !props.wrap ? textColum : {};
      doc
        .rect(posX(props.positionCol), props.posY, colSize * props.size, height)
        .text(props.content, posX(props.positionCol) + 10, props.posY + 10, {
          ...displayCol,
          width: colSize * props.size - 20,
          align: props.align || "left",
        });
      if (props.img)
        doc.image(props.img, posX(props.positionCol) + 10, props.posY + 30, {
          width: 200,
        });
    },
  };
};

module.exports = getTheme;
