import prisma from "../../../../prisma/config";

const testController = async () => {
  try {
    const res = await prisma.dossier.create({
      data: {
        name: "test resussi",
        numero: "1",
        user: { create: { email: "toto" } },
      },
    });
    return res;
  } catch (e) {
    throw e;
  }
};

export default testController;
