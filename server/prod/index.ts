import { config } from "../config";
import { Express } from "express";
import { NODE_ENV } from "../../config/env";

export const prodPath = (app: Express, express: any) => {
  if (NODE_ENV !== "production") return null;
  app.use(express.static(config.PROD_PATH));
  app.use("/contents", express.static(config.CONTENTS_PATH));

  return app.get("*", function (_req, res) {
    res.sendFile(config.INDEX_PATH);
  });
};
