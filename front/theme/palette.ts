declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

const palette = {
  primary: { main: "#2A9D8F", light: "#F2F8F7" },
  secondary: { main: "#E76F51", light: "#FBF2EF" },
  neutral: {
    main: "#000",
  },
  common: { black: "#000", white: "#fff" },
};
export default palette;
