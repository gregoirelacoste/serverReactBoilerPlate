import { Express } from "express";
import { NODE_ENV } from "../../config/env";
import { config } from "../config";


export const devPath = (app: Express, express: any) => {
  if (NODE_ENV !== "development") return;

  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const getWebpackConfig = require("../../webpack/webpack.config");

  const webpackConfig = getWebpackConfig({}, { mode: "development" });
  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  app.use(require("webpack-hot-middleware")(compiler));
  app.use("/contents", express.static(config.CONTENTS_PATH));
};
