import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query onGetAllUsers {
    getUsers {
      fullName
      email
      phone
      state

      constituency
      district

      canVote
      offlinePetition
      beInformed
      signed
    }
  }
`;
