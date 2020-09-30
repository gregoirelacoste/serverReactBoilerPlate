import { config } from "./config";
import { devPath } from "./dev";
import { prodPath } from "./prod";

console.log(process.env.NODE_ENV);

const express = require("express");
const app = express();

devPath(app);
prodPath(app, express);

app.listen(config.PORT, () => {
  console.log(`server  started on port ${config.PORT}`);
});
