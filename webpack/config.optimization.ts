import { Env } from "../config/env";

const optimization = (env: Env) => ({
  minimize: env === "production",
  splitChunks: {
    chunks: "all",
    maxInitialRequests: 10,
    minSize: 20,
  },
});
module.exports = optimization;
