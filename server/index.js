const path = require("path");
const express = require("express");
const env = require("../config/env");

const app = express();
app.use(express.static(path.join(__dirname, "..", "build", "static")));

app.listen(1337, () => {
  console.log("server started on port 1337");
});
