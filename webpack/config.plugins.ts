import { NODE_ENV } from "../config/env";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const plugins = () => {
  const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "front", "index.html"),
      filename: "index.html",
      inject: true,
    }),
  ];
  if (NODE_ENV !== "production") {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new ForkTsCheckerWebpackPlugin()
    );
  }

  if (NODE_ENV === "production") {
    plugins.push(new CompressionPlugin());
  }
  return plugins;
};
module.exports = plugins;
