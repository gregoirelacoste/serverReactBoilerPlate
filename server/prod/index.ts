import { config } from "../config";
import { Express } from "express";
import { NODE_ENV } from "../../config/env";
import * as path from "path";

export const prodPath = (app: Express, express: any) => {
  if (NODE_ENV !== "production") return null;
  app.use(express.static(config.PROD_PATH));
  return app.get("/", function (_req, res) {
    res.sendFile(path.join(__dirname, "build", "static", "index.html"));
  });
};
