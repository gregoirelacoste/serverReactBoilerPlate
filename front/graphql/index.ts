import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL } from "../config";
import cacheOptions from './cache'

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(cacheOptions),
});

export default client;
