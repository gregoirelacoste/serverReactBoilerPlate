import { NODE_ENV } from "../config/env";
import * as path from "path";

const ENTRY = path.join(__dirname, "..", "front", "index.tsx");

export const entry =
  NODE_ENV !== "production" ? ["webpack-hot-middleware/client", ENTRY] : ENTRY;
