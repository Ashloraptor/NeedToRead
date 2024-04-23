import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
      email
      password
      savedBooks
    }
  }
`;

export const QUERY_BOOKS = gql`
  query books($_id: String) {
    books(_id: $_id) {
      _id
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;
