import React from "react";
import "./styles.css";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql";
import Home from "./Views/home";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Home />
      </div>
    </ApolloProvider>
  );
};

export default App;
