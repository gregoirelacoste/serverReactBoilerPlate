import { PrismaClient } from "@prisma/client/scripts/default-index";

export const mutations = (repo: PrismaClient) => ({
  addUser: async (_parent: any, args: any) => {
    try {
      const dossiers = args.user &&
        args.user.dossiers && {
          connect: args.user.dossiers.map((id: any) => ({ id })),
        };
      return repo.user.create({
        data: {
          ...args.user,
          dossiers,
        },
      });
    } catch (e) {
      throw e;
    }
  },
});
