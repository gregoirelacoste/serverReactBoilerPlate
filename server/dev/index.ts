import { Express } from "express";
import { NODE_ENV } from "../../config/env";

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("../../webpack/webpack.config");

const compiler = webpack(webpackConfig);

export const devPath = (app: Express) => {
  if (NODE_ENV !== "development") return null;
  return app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
};
