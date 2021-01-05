import React from "react";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client from "./graphql";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import Feedback from "../services/components/Feedback/Feedback";
import { feedbackVar } from "./graphql/cache/variables/feedback.var";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const App = () => {
  const feedbackState = useReactiveVar(feedbackVar);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
          <Feedback
            isOpen={feedbackState.isOpen}
            modal={feedbackState.modal}
            message={feedbackState.message}
            type={feedbackState.type}
            error={feedbackState.error}
            setOpen={feedbackVar}
          />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
