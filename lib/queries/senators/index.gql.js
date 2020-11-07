import { gql } from "@apollo/client";

export const ADD_SENATOR = gql`
  mutation onAddSenator(
    $name: String!
    $constituency: String
    $state: String
    $party: String
    $yearsInService: Int
  ) {
    addSenator(
      data: {
        name: $name
        constituency: $constituency
        state: $state
        party: $party
        yearsInService: $yearsInService
      }
    )
  }
`;

export const GET_SENATORS = gql`
  query onGetSenators($page: Int) {
    getSenators(page: $page) {
      docs {
        name
        constituency
      }
    }
  }
`;
