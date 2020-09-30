import { NODE_ENV } from "../config/env";
import { devtool } from "./config.devtool";

const optimization = require("./config.optimization");
const path = require("path");
const plugins = require("./config.plugins");

module.exports = {
  entry: { index: "./front/index.tsx" },
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".jsx"],
    modules: [path.resolve(__dirname, ".."), "node_modules"],
  },
  output: {
    filename: "declarer-sinistre.main.[hash].js",
    chunkFilename: "declarer-sinistre.chunk.[name].[hash].js",
    path: path.join(__dirname, "..", "build", "static"),
    publicPath: "/",
  },
  devtool: devtool,
  optimization: optimization,
  plugins: plugins,
};
