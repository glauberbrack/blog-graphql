const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });
server.listen();
