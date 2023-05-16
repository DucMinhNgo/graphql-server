const Book = require('../models/Book');
const Author = require('../models/Author');

const mongoDataMethod = {
  // Book Service
  getAllBooks: async (condition = null) => {
    if (condition === null) return await Book.find();

    return await Book.find(condition); 
  },
  getBookById: async (args) => {
    return await Book.findById(args?.id);
  },
  createBook: async (args) => {
    const newBook = new Book(args);

    return await newBook.save(); 
  },
  // Author Service
  getAllAuthors: async () => {
    return await Author.find();
  },
  getAuthorById: async (args) => {
    return await Author.findById(args?.id);
  },
  createAuthor: async (args) => {
    const newAuthor = new Author(args);

    return await newAuthor.save();
  },
}

module.exports = mongoDataMethod;