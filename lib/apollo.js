import ApolloClient, { createNetworkInterface } from 'apollo-client';
import 'isomorphic-fetch';

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    ssrMode: !process.browser,
    uri: 'http://localhost:4000/graphql',
  }),
});
