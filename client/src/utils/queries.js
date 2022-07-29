import { gql } from '@apollo/client';


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
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

