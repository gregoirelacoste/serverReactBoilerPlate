import { PATHS } from '../../config/paths'

const path = require("path");
const helmet = require("helmet");

export const config = {
  PORT: process.env.PORT || 3000,
  HELMET: helmet({
    contentSecurityPolicy: false,
  }),
  PROD_PATH: path.join(PATHS.APP_ROOT, "static"),
  CONTENTS_PATH: path.join(PATHS.APP_ROOT, "contents"),
  INDEX_PATH: path.join(PATHS.APP_ROOT, "static", "index.html"),
};
