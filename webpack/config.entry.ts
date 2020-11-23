import { Env } from "../config/env";
import * as path from "path";

export const entry = (env: Env) => {
  const entries = env !== "production" ? ["webpack-hot-middleware/client","regenerator-runtime/runtime"] : [];

  entries.push(path.join(__dirname, "..", "front", "index.tsx"));
  return entries;
};
