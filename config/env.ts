require("dotenv").config();

export type BuildMode = "production" | "development";
export type Env = string | BuildMode | undefined;

export const NODE_ENV: Env = process.env.NODE_ENV;

export const PROD_ENV_FRONT = {
  GA_ID: process.env.GA_ID,
  DATABASE_URL: process.env.DATABASE_URL,
  ENABLE_SENTRY: process.env.ENABLE_SENTRY,
};
export const DEV_ENV_FRONT =
  process.env.NODE_ENV !== "production" && require("dotenv").config().parsed;

export const formatEnvVar = (envVar: object) =>
  typeof envVar === "object" &&
  Object.keys(envVar).reduce((prev: any, next: any) => {
    // @ts-ignore
    prev[`process.env.${next}`] = JSON.stringify(envVar[next]);
    return prev;
  }, {});

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
