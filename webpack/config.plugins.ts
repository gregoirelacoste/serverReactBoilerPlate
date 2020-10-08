import { Env } from "../config/env";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const WatchMissingNodeModulesPlugin = require("react-dev-utils/WatchMissingNodeModulesPlugin");

const plugins = (env: Env) => {
  const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "front", "index.html"),
      filename: "index.html",
      inject: true,
    }),
    new WatchMissingNodeModulesPlugin(path.resolve("node_modules")),
  ];
  if (env === "development") {
    plugins.push(
      new ForkTsCheckerWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin()
    );
  }

  if (env === "production") {
    plugins.push(new CompressionPlugin());
  }
  return plugins;
};
module.exports = plugins;
