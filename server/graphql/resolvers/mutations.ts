import { PrismaClient } from "@prisma/client/scripts/default-index";

export const mutations = (repo: PrismaClient) => ({
  Mutation: {
    addUser: repo.user.create(),
  },
});
