const { PrismaClient } = require("@prisma/client");

const prismaOptions = () => {
  return {
    log: ["query", "info", "warn", "error"],
    errorFormat: "colorless",
    datasources: {
      prisma: {
        url: process.env.DATABASE_URL,
      },
    },
  };
};

module.exports = new PrismaClient(prismaOptions());
