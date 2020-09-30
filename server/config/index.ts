const path = require("path");

export const config = {
  PORT: process.env.PORT || 3000,
  PROD_PATH: path.join(__dirname, "..", "..", "static"),
};
