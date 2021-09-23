import { gql } from "@apollo/client";

export const GET_MEMBERS = gql`
  query Query {
    members {
      id
      firstName
      lastName
      department
      contact
      chapel
    }
  }
`;

export const GET_PAYMENT = gql`
  query Query($paymentType: String, $paymentMonth: String) {
    payment(type: $paymentType, month: $paymentMonth) {
      id
      firstName
      lastName
      chapel
      contact
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
      spouseName
      nameOfChildren
      imageURL
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
      firstName
      lastName
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

export const GET_VISITOR = gql`
  query Query($visitorId: ID) {
    visitor(id: $visitorId) {
      id
      firstName
      lastName
      contact
      location
      invitedBy
      awarenessChannel
      monthOfBirth
      knowingChrist
      chapel
    }
  }
`;

export const GET_GENDER_COUNT = gql`
  query Query {
    countGender {
      type
      value
    }
  }
`;

export const GET_OMEGA_COUNT = gql`
  query Query {
    countGender {
      type
      value
    }
  }
`;

export const GET_CHILDREN_COUNT = gql`
  query Query {
    countGender {
      type
      value
    }
  }
`;

export const GET_VEHICLES_COUNT = gql`
  query Query {
    countVehicle {
      type
      date
      number
    }
  }
`;

export const GET_ADULT_STATS = gql`
  query Query {
    adultStat {
      type
      date
      number
    }
  }
`;
