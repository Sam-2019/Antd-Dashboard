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

export const GET_MEMBER = gql`
  query Query($memberId: ID) {
    member(id: $memberId) {
      id
      firstName
      lastName
      chapel
      gender
      emailAddress
      department
      residentialAddress
      contact
      location
      nameOfChildren {
        firstName
        lastName
      }
    }
  }
`;

export const GET_MEMBER_NAME = gql`
  query Query($memberId: ID) {
    member(id: $memberId) {
      id
      firstName
      lastName
      chapel
      gender
      emailAddress
      department
      residentialAddress
      contact
      location
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

export const GET_PLEDGE = gql`
  query Query {
    pledge {
      id
      pledgeeID
      amount
      programme
      status
      pledgeDate
      redeemedDate
    }
  }
`;

export const GET_DEPARTMENT = gql`
  query Query($department: String) {
    department(department: $department) {
      id
      firstName
      lastName
      chapel
      contact
    }
  }
`;

export const GET_VISITORS = gql`
  query Query {
    visitors {
      id
      firstName
      lastName
      ageGroup
      contact
      date
      monthOfBirth
    }
  }
`;
