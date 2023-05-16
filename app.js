const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

// Load schema & resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

// load db method
const mongoDataMethod = require('./data/db');

// connect to mongobd
const connectDB = async () => {
  try {
		await mongoose.connect('mongodb+srv://ducminhngo1998:dustin@cluster0.erovkru.mongodb.net', {
			// useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			// useFindAndModify: false
		})

		console.log('MongoDB connected');
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethod }), // truyen data vaof resolver
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