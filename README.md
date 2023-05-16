https://topdev.vn/blog/huong-dan-bat-dau-graphql-voi-node-js/

Schema: Xác định những gì được phép hiện trong máy chủ

# Query
query MyQuerySomeThing {
  authors {
    name,
    id,
    books {
      name,
    }
  }
}

# mutation
mutation mutationBook {
  createBook(id: 4, name: "Dustin", genre: 200) {
    id
    name
    genre
  }
}

mutation mutationAuthor {
  createAuthor(id: 4, name: "Dustin", age: 200) {
    id
    name
    age
  }
}
# subscript