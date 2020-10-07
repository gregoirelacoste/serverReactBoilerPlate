import { PrismaClient } from "@prisma/client/scripts/default-index";

export const queries = (repo: PrismaClient) => ({
  users: async (_parent: any) => await repo.user.findMany(),
  dossiers: async () => await repo.dossier.findMany(),
});
