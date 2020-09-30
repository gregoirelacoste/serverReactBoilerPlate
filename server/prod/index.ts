import { config } from "../config";
import { Express } from "express";
import { NODE_ENV } from "../../config/env";

export const prodPath = (app: Express, express: any) => {
  if (NODE_ENV !== "production") return null;
  return app.use(express.static(config.PROD_PATH));
};
