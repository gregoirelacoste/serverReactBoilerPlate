import { PrismaClient } from "@prisma/client/scripts/default-index";

export const queries = (repo: PrismaClient) => ({
  Query: {
    users: () => repo.user.findMany(),
    dossiers: () => repo.dossier.findMany(),
  },
});
