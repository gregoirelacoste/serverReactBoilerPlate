import { NODE_ENV } from "../config/env";

export const devtool =
  NODE_ENV === "production" ? "source-map" : "inline-source-map";
