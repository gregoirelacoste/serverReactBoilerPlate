import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
