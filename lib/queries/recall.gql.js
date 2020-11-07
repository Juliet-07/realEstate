import {gql} from "@apollo/client";

export const GET_ALL_SENATORS = gql`
  query onGetAllSenators {
    getSenators {
      docs {
        _id
        name
        party
        state
        imageSource
        constituency
        totalPetition
        yearsInService
      }
    }
  }
`

// export const GET_ALL_REPS = gql``
