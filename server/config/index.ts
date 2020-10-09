const path = require("path");
const helmet = require("helmet");

export const config = {
  PORT: process.env.PORT || 3000,
  PROD_PATH: path.join(__dirname, "..", "..", "static"),
  HELMET: helmet(),
  DEV_PATH: path.join(__dirname, "..", "..", "front"),
};
