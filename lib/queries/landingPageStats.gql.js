import {gql} from "@apollo/client";


export const LANDING_PAGE_STATS = gql`
  query landingPageStats {
    countClass 
    getStudentsCount
    getTeachersCount
  }
`;