const { books, authors } = require("../data/static");
const Author = require('../models/Author');
const Book = require('../models/Book');

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
    createAuthor: async (parent, args) => {
      const newAuthor = new Author(args);

      return await newAuthor.save();
    },
    createBook: async (parent, args) => {
      const newBook = new Book(args);

      return await newBook.save(); 
    },
  }

};

module.exports = resolvers;