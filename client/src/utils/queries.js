import { gql } from '@apollo/client';


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        _id: ID!
        authors: String!
        description: String!
        name: String!
        bookId: String!
        image: String
        link: String
        title: String!
      }
    }
  }
`;

