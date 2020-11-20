require("dotenv").config();
const dotenv = require("dotenv");

export type BuildMode = "production" | "development";
export type Env = string | BuildMode | undefined;

export const NODE_ENV: Env = process.env.NODE_ENV;
export const PROD_ENV = {
  ENABLE_SENTRY: process.env.ENABLE_SENTRY,
  GA_ID: process.env.GA_ID,
};
export const DEV_ENV = dotenv.config().parsed;

export const formatEnvVarForWebpack = (envVar: object) =>
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
