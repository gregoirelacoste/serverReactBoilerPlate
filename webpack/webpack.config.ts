import { devtool } from "./config.devtool";
import { entry } from "./config.entry";
import { Configuration } from "webpack";
import { BuildMode } from "../config/env";
const optimization = require("./config.optimization");
const path = require("path");
const plugins = require("./config.plugins");

interface ArgV {
  mode?: BuildMode;
}

const webpackConfig = (_env = {}, argv: ArgV = {}): Configuration => ({
  entry: entry(argv.mode),
  mode: argv.mode,
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
      {
        test: /\.svg/,
        loader: "svg-url-loader",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".jsx"],
    modules: [path.resolve(__dirname, ".."), "node_modules"],
  },
  output: {
    filename: "levelone.main.[hash].js",
    chunkFilename: "levelone.chunk.[name].[hash].js",
    path: path.join(__dirname, "..", "build", "static"),
    publicPath: "/",
  },
  devtool: devtool(argv.mode),
  optimization: optimization(argv.mode),
  plugins: plugins(argv.mode),
});

module.exports = webpackConfig;
