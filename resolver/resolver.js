const { books, authors } = require("../data/static");

const resolvers = {
  // Query
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id?.toString() === args.id?.toString()), 
    authors: () => authors,
    author: (parent, args) => authors.find((author) => author.id?.toString() === args.id?.toString()), 
  },
  Book: {
    author: (parent, args) => {
      return authors.find((author) => author.id?.toString() === parent.id?.toString())
    },
  },
  Author: {
    books: (parent, args) => {
      return books.filter((book) => book.authorId?.toString() === parent.id?.toString());
    }
  },

  // Mutation
  Mutation: {
    createAuthor: (parent, args) => {
      return args;
    },
    createBook: (parent, args) => {
      return args;
    },
  }

};

module.exports = resolvers;