import { PrismaClient } from "@prisma/client/scripts/default-index";


export const queries = (repo: PrismaClient) => ({
  users: async (_parent: any, args: any) =>
    await repo.user.findMany(args),
});
