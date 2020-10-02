import { config } from "./config";
import { devPath } from "./dev";
import { prodPath } from "./prod";
import { NextFunction, Request, Response } from "express";
import testController from "./api/controllers/_test";
import initApollo from "./graphql/config";

console.log(process.env.NODE_ENV);

const express = require("express");
const app = express();

devPath(app);
prodPath(app, express);

app.use((_req: Request, _res: Response, next: NextFunction) => {
  initApollo(app);
  next();
});

app.get("/test", async (_req: any, res: Response) => {
  try {
    const result = await testController();
    res.send(result);
  } catch (e) {
    throw e;
  }
});

app.listen(config.PORT, () => {
  console.log(`server  started on port ${config.PORT}`);
});
