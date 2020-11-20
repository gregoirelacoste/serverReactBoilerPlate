import { DEV_ENV, Env, formatEnvVarForWebpack, PROD_ENV } from '../config/env'
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
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin(formatEnvVarForWebpack(DEV_ENV)),
    );
  }

  if (env === "production") {
    plugins.push(new CompressionPlugin());
    new webpack.DefinePlugin(formatEnvVarForWebpack(PROD_ENV))
  }
  return plugins;
};
module.exports = plugins;
