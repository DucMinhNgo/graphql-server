const { books, authors } = require("../data/static");
const Author = require('../models/Author');
const Book = require('../models/Book');

const resolvers = {
  // Query
  Query: {
    books: async (parent, args, {mongoDataMethod}) => await mongoDataMethod?.getAllBooks(),
    book: async (parent, args, {mongoDataMethod}) => await mongoDataMethod?.getBookById(args), 
    authors: async (parent, args, {mongoDataMethod}) => await mongoDataMethod?.getAllAuthors(),
    author: async (parent, args, {mongoDataMethod}) => await mongoDataMethod?.getAuthorById(args) 
  },
  Book: {
    author: async (parent, args, {mongoDataMethod}) => {
      return await mongoDataMethod.getAuthorById({ id: parent?.authorId}); 
    },
  },
  Author: {
    books: async (parent, args, {mongoDataMethod}) => {
      return await mongoDataMethod.getBookById({ authorId: parent?.Id });
    }
  },

  // Mutation
  Mutation: {
    createAuthor: async (parent, args, {mongoDataMethod}) => {
      return await mongoDataMethod.createAuthor(args);
    },
    createBook: async (parent, args, {mongoDataMethod}) => {
      return await mongoDataMethod.createBook(args);
    },
  }

};

module.exports = resolvers;