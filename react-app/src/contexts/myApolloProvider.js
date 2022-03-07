import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({ uri: process.env.REACT_APP_GRAPHQL_URI });

const MyApolloProvider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default MyApolloProvider;