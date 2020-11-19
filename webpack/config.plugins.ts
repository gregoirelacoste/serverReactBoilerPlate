import { Env } from "../config/env";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const WatchMissingNodeModulesPlugin = require("react-dev-utils/WatchMissingNodeModulesPlugin");
const dotenv = require("dotenv");

const plugins = (env: Env) => {
  // call dotenv and it will return an Object with a parsed key
  const dotenvParseOutput = dotenv.config().parsed;
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(dotenvParseOutput).reduce((prev: any, next) => {
    prev[`process.env.${next}`] = JSON.stringify(dotenvParseOutput[next]);
    return prev;
  }, {});

  const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "front", "index.html"),
      filename: "index.html",
      inject: true,
    }),
    new WatchMissingNodeModulesPlugin(path.resolve("node_modules")),
    new webpack.DefinePlugin(envKeys),
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
