import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://staging.sparrow.escapes.tech/graphql/",
  cache: new InMemoryCache(),
});

export default apolloClient;
