import { gql } from "@apollo/client";

export const GET_MEMBERS = gql`
  query Query {
    members {
      id
      firstName
      lastName
      age
      department
      emailAddress
    }
  }
`;

export const GET_CHAPEL_MEMBERS = gql`
  query Query($chapel: String) {
    chapel(chapel: $chapel) {
      firstName
      id
      lastName
      otherName
      dateOfBirth
      age
      chapel
      department
    }
  }
`;
