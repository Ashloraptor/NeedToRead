import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// export const ADD_USER = gql`
//   mutation addUser($email: String!, $username: String!, $password: String!) {
//     addUser(email: $email, username: $username, password: $password) {
//         _id
//         username
//         email
        
//     }
//   }
// `;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_SAVEDBOOK = gql`
  mutation createSavedBook($_id: Int!, $user_id: Int!) {
    createSavedBook(_id: $_id, user_id: $user_id) {
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
