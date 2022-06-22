import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pqnhd72i5o01w71sgb2qud/master',
    cache: new InMemoryCache()
})