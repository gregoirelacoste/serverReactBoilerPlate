import { PrismaClient } from "@prisma/client";
import { Env, NODE_ENV } from "../config/env";
import { PrismaClientOptions } from "@prisma/client/runtime";

const prismaOptions = (env: Env): PrismaClientOptions => {
  if (env !== "development")
    return { log: ["warn", "error"], errorFormat: "minimal" };
  return {
    log: ["query", "info", "warn", "error"],
    errorFormat: "pretty",
  };
};

const prisma = new PrismaClient(prismaOptions(NODE_ENV));

export default prisma;
