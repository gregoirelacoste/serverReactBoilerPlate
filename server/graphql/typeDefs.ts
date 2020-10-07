const { gql } = require("apollo-server-express");

export const typeDefs = gql`
  type Dossier {
    id: ID!
    name: String
    numero: String
    description: String
    user: User
  }
  type User {
    id: ID!
    name: String
    email: String
    dossiers: [Dossier]
  }
  input UserInput {
    name: String
    email: String
    dossiers: [Int]
  }
  """
  Put ID is String in Primas wait for an int so Int to pass an Id
  """
  type Query {
    users: [User]
    dossiers: [Dossier]
  }

  type Mutation {
    addUser(user: UserInput): User
  }
`;
