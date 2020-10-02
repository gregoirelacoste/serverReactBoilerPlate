const { gql } = require("apollo-server-express");

export const typeDefs = gql`
  type User {
    name: String
    email: String
  }

  type Dossier {
    name: String
    numero: String
    description: String
    users: [User]
  }

  input UserInput {
    name: String
    email: String
  }

  type Query {
    users: [User]
    dossiers: [Dossier]
  }

  type Mutation {
    addUser(user: UserInput): User
  }
`;
