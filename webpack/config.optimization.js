const optimization = {
  minimize: process.env.NODE_ENV === "production",
  splitChunks: {
    chunks: "all",
    maxInitialRequests: 10,
    minSize: 20,
  },
};
module.exports = optimization;
