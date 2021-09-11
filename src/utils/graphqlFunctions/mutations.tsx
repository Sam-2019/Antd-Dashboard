import { gql } from "@apollo/client";

export const ADD_MEMBER = gql`
  mutation AddMember($addMember: AddMember) {
    addMember(input: $addMember) {
      firstName
      lastName
      otherName
      dateOfBirth
      age
      gender
      hometown
      region
      country
      residentialAddress
      contact
      emergencyContact
      emailAddress
      postalAddress
      maritalStatus
      spouseName
      numberOfChlidren
      nameOfChildren {
        firstName
        lastName
      }
      dateJoinedChurch
      department
      previousChurch
    }
  }
`;

export const ADD_SUNDAY_SERVICE = gql`
  mutation AddSundayService($addSundayService: AddSundayService) {
    addSundayService(input: $addSundayService) {
      adultFemale
      adultMale
      altercallFemale
      altercallMen
      bibleText
      bicycles
      cars
      childrenBoy
      childrenGirl
      date
      motors
      omegaFemale
      omegaMale
      preacher
      theme
      startTime
      endTime
      visitorsFemale
      visitorsMale
      type
    }
  }
`;

export const ADD_VISITOR = gql`
  mutation AddVisitor($addVisitor: AddVisitor) {
    addVisitor(input: $addVisitor) {
      firstName
      lastName
      ageGroup
      awarenessChannel
      awarenessChannelOther
      contact
      date
      invitedBy
      knowingChrist
      location
      membership
      monthOfBirth
    }
  }
`;

export const ADD_PAYMENT = gql`
  mutation Mutation($addPaymentPayerInput: AddPayer) {
    addPaymentPayer(input: $addPaymentPayerInput) {
      members
    }
  }
`;


export const ADD_PROJECTOFFERING = gql`
mutation Mutation($addProjectOfferingInput: AddPayer) {
  addProjectOffering(input: $addProjectOfferingInput) {
    members
  }
}
`;

export const ADD_PLEDGE = gql`
  mutation AddPledge($addPledge: AddPledge) {
    addPledge(input: $addPledge) {
      id
      pledgeeID
      pledgeDate
      amount
      programme
      redeemedDate
      status
    }
  }
`;
