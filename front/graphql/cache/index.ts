import queries from "./queries";

const cacheOptions = {
  typePolicies: {
    Query: queries,
  },
};

export default cacheOptions;
