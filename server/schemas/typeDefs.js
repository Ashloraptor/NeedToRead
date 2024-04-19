const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String
    password: String
    savedBooks: [String]!
  }

  type Book {
    _id: ID!
    authors: String!
    description: String!
    image: String!
    link: String!
    title: String!
    
  }

  type Query {
    user: [User]
    books(_id: String): [Book]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
    addBook(userId: ID!, book: String!): User
    removeUser: User
    removeBook(book: String!): User
  }
`;

module.exports = typeDefs;
