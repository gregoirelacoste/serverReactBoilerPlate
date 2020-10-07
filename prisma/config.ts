import { Env, NODE_ENV } from "../config/env";
import { PrismaClientOptions } from "@prisma/client/runtime";
import { PrismaClient } from "./clientGenerated";

const prismaOptions = (env: Env): PrismaClientOptions => {
  if (env !== "development")
    return { log: ["warn", "error"], errorFormat: "minimal" };
  return {
    log: ["query", "info", "warn", "error"],
    errorFormat: "colorless",
  };
};

const prisma = new PrismaClient(prismaOptions(NODE_ENV));

export default prisma;
