import { NODE_ENV } from "../config/env";
import * as path from "path";

export const entry = () => {
  const entries =
    NODE_ENV !== "production" ? ["webpack-hot-middleware/client"] : [];

  entries.push(path.join(__dirname, "..", "front", "index.tsx"));
  return entries;
};
