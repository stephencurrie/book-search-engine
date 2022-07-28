const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: String!
    description: String!
    name: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }



  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  input SaveBookContent {
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
    authors: [String]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(content: SaveBookContent!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
