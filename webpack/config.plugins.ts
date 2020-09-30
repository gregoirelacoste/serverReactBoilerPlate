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
      new ForkTsCheckerWebpackPlugin({
        async: true,
        checkSyntacticErrors: true,
        eslint: true,
        reportFiles: ["**", "!**/test/**", "!**/?(*.)(spec|test).*"],
        silent: false,
        tsconfig: path.resolve(__dirname, "..", "tsconfig.json"),
        // Incremental compilation in incompatible with workers
        useTypescriptIncrementalApi: true,
        // workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE // undefined in CRA
      })
    );
  }

  if (NODE_ENV === "production") {
    plugins.push(new CompressionPlugin());
  }
  return plugins;
};
module.exports = plugins;
