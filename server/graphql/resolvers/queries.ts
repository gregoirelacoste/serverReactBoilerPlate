const users = [
  {
    name: "The Awakening",
    email: "Kate Chopin",
  },
  {
    name: "greg",
    email: "Kaggg",
  },
];

const dossiers = [
  {
    name: "dossier",
    description: "toto",
    users: [{ name: "greg" }],
  },
];

export const queries = {
  Query: {
    users: () => users,
    dossiers: () => dossiers,
  },
};
