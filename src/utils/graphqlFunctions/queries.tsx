import { gql } from "@apollo/client";

export const GET_MEMBERS = gql`
  query Query {
    members {
      id
      firstName
      lastName
      age
      gender
      department
    }
  }
`;
