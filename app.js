const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Load schema & resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

server.start().then(() => {
  server.applyMiddleware({
    app,
  });
});

const PORT = 4000;

app.listen({port: PORT}, () => {
  console.log(
    `GraphQL endpoint and playground accessible at http://localhost:${PORT}${server.graphqlPath}`,
  );
})