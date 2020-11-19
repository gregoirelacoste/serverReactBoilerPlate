import { config } from "./config";
import { devPath } from "./dev";
import { prodPath } from "./prod";
import { NextFunction, Request, Response } from "express";
import initApollo from "./graphql/config";
const express = require("express");
const app = express();

app.use(config.HELMET);

devPath(app, express);
prodPath(app, express);

app.use("/contents", express.static(config.CONTENTS_PATH));
app.use((_req: Request, _res: Response, next: NextFunction) => {
  initApollo(app);
  next();
});

app.listen(config.PORT, () => {
  console.log(`server  started on port ${config.PORT}`);
});
