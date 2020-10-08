import { Express } from "express";
import { NODE_ENV } from "../../config/env";
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const getWebpackConfig = require("../../webpack/webpack.config");

export const devPath = (app: Express) => {
  if (NODE_ENV !== "development") return null;
  const webpackConfig = getWebpackConfig();
  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  return app.use(require("webpack-hot-middleware")(compiler));
};
