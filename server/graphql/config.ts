import { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { queries } from "./resolvers/queries";
import prisma from "../../prisma/config";
import { mutations } from "./resolvers/mutations";

const resolvers = { Query: queries(prisma), Mutation: mutations(prisma) };

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const initApollo = (app: Express) => {
  return server.applyMiddleware({ app, path: "/api" });
};
export default initApollo;
