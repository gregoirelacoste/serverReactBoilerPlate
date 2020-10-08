import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// @ts-ignore
if (module.hot) {
  console.log("modull hoe");
  // @ts-ignore
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById("root"));
