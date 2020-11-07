import { gql } from "@apollo/client";

export const CURRENT_USER = gql`
  query onGetCurrentUser {
    getCurrentUser {
      _id
      email
      phone
      fullName
      createdAt
      updatedAt
      accountType
    }
  }
`;