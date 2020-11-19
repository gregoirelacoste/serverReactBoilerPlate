const prismaSeeds = require("./config");

const create = async (data,endpoint) => {
  try {
    await Promise.all(
      data.map((d) => prismaSeeds[endpoint].create({ data: d }))
    );
    return "ok";
  } catch (e) {
    throw e;
  }
};

create([],"endpoint");
