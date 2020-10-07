import { PrismaClient } from "@prisma/client/scripts/default-index";
import { GetUsersQueryVariables } from "../../../front/graphql/genTypes";

export const queries = (repo: PrismaClient) => ({
  users: async (_parent: any, args: GetUsersQueryVariables) =>
    await repo.user.findMany(args),
  dossiers: async () => await repo.dossier.findMany(),
});
