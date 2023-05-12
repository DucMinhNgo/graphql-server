const resolvers = {
  Query: {
    books: () => [
      {
        id: 1,
        name: 'De Men Phieu Luu Ky',
        genre: 'Adventure'
      },
      {
        id: 2,
        name: 'Lam Giau Khong Kho',
        genre: 'Education'
      }
    ]
  }
};

module.exports = resolvers;