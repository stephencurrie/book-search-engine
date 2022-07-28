import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($SaveBookContent: String!) {
    saveBook(SaveBookContent: $SaveBookContent) {
        _id
        authors
        description
        name
        bookId
        image
        link
        title
        }
      }
    }
  `;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId) {
    removeBook(bookId) {
        _id
        authors
        description
        name
        bookId
        image
        link
        title
        }
      }
    }

`;