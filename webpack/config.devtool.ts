import { Env } from "../config/env";

export const devtool = (env: Env) =>
  env === "production" ? "source-map" : "inline-source-map";
