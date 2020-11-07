import { gql } from "@apollo/client";

export const OVERVIEW_CARDS = gql`
  query onGetOverViewCards {
    getTotalRegisteredUsers
    getUsersSignedPetition
  }
`;
