const {gql} = require('apollo-server-express');
// ID: có thể là kiểu dữ liệu số hoặc kiểu dữ liệu chữ.
const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }

  # ROOT TYPE
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    createAuthor(name: String, age: Int):Author
    createBook(name: String, genre: String, authorId: String):Book
  }
`;
// Query: lấy dữ liệu
// Mudation: tạo mới, cập nhật dữ liệu

module.exports = typeDefs;