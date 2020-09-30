require("dotenv").config();

type Env = string | "production" | "development" | undefined;

export const NODE_ENV: Env = process.env.NODE_ENV;

if (!NODE_ENV) {
  throw new Error(
    `Vous n'avez pas défini la variable d'environnement NODE_ENV`
  );
}
