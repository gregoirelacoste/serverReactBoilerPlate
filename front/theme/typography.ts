declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

const typography = {
  fontFamily: "Roboto",
  h1: { fontSize: "42px" },
  h2: { fontSize: "36px" },
  h3: { fontSize: "30px", textDecoration: "underline" },
  h4: { fontSize: "20px" },
  overline: { fontSize: "20px" },
};
export default typography;
