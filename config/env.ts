require("dotenv").config();

export type BuildMode = "production" | "development";
export type Env = string | BuildMode | undefined;

export const NODE_ENV: Env = process.env.NODE_ENV;

if (!NODE_ENV) {
  throw new Error(
    `Vous n'avez pas défini la variable d'environnement NODE_ENV`
  );
}
if (!process.env.DATABASE_URL) {
  throw new Error(
    `Vous n'avez pas défini la variable d'environnement DATABASE_URL`
  );
}
