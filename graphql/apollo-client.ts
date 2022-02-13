import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: String(process.env.GRAPHQL_URL),
    cache: new InMemoryCache(),
});

export default client;