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
      nameOfChildren
      yearJoinedChurch
      department
      previousChurch
      group
    }
  }
`;

export const UPDATE_MEMBER = gql`
  mutation UpdateMemberMutation(
    $updateMemberId: ID
    $updateMemberInput: AddMember
  ) {
    updateMember(id: $updateMemberId, input: $updateMemberInput) {
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
      nameOfChildren
      yearJoinedChurch
      department
      previousChurch
      group
    }
  }
`;

export const ADD_SUNDAY_SERVICE = gql`
  mutation AddSundayServiceMutation($addSundayServiceInput: AddSundayService) {
    addSundayService(input: $addSundayServiceInput) {
      id
      adultFemale
      adultMale
      type
      visitorsMale
      visitorsFemale
      endTime
      theme
      preacher
      startTime
      omegaMale
      omegaFemale
      motors
      childrenGirl
      bicycles
      bibleText
      childrenBoy
      date
      cars
      altercallFemale
      altercallMen
    }
  }
`;

export const ADD_VISITOR = gql`
  mutation Mutation($addVisitorInput: AddVisitor) {
    addVisitor(input: $addVisitorInput) {
      id
      firstName
      lastName
      ageGroup
      awarenessChannel
      contact
      awarenessChannelOther
      date
      invitedBy
      location
      knowingChrist
      membership
      monthOfBirth
      group
    }
  }
`;

export const UPDATE_VISITOR = gql`
  mutation UpdateVisitorMutation(
    $updateVisitorId: ID
    $updateVisitorInput: AddVisitor
  ) {
    updateVisitor(id: $updateVisitorId, input: $updateVisitorInput) {
      id
      firstName
      lastName
      ageGroup
      awarenessChannel
      contact
      awarenessChannelOther
      date
      invitedBy
      location
      knowingChrist
      membership
      monthOfBirth
      group
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
      firstName
      lastName
      otherName
      contact
      emailAddress
      programme
      amount
      pledgeDate
      redeemedDate
    }
  }
`;
export const UPDATE_PLEDGE = gql`
  mutation UpdatePledgeMutation(
    $updatePledgeId: ID
    $updatePledgeInput: AddPledge
  ) {
    updatePledge(id: $updatePledgeId, input: $updatePledgeInput) {
      id
      firstName
      lastName
      otherName
      contact
      emailAddress
      programme
      amount
      pledgeDate
      redeemedDate
    }
  }
`;

export const UPDATE_PLEDGE_STATUS = gql`
  mutation UpdatePledgeStatusMutation($pledgeId: ID, $pledgeInput: AddPledge) {
    updatePledgeStatus(id: $pledgeId, input: $pledgeInput) {
      status
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation Mutation($uploadImageInput: AddImage) {
    uploadImage(input: $uploadImageInput) {
      id
      imageURL
    }
  }
`;

export const USER_SIGNUP = gql`
  mutation Signup($signup: AddUser) {
    signup(input: $signup) {
      id
      firstName
      lastName
      emailAddress
    }
  }
`;
