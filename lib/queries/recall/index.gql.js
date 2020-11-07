import { gql } from "@apollo/client";

export const PETITION_SENATOR = gql`
  mutation onSignPetition($legislatureId: ID) {
    addSenatorPetition(data: { legislatureId: $legislatureId })
  }
`;
