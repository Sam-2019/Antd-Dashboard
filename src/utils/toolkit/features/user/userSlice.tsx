import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homseState: true,
  loggedIn: false,
  userID: null,
  user: {
    id: null,
    firstName: null,
    lastName: null,
    userName: null,
    gender: null,
    contact: null,
    emailAddress: null,
    homeAddress: null,
    password: null,
    verified: false,
    dob: null,
    imageURL: null,
  },
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    isLoggedOut: (state, action) => {
      state.loggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    getAccessToken: ({ accessToken }) => {
      // eslint-disable-next-line no-self-assign
      accessToken = accessToken;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    appState: (state, action) => {
      state.homseState = action.payload;
    },
  },
});

export const {
  isLoggedIn,
  isLoggedOut,
  setUser,
  getAccessToken,
  setAccessToken,
  appState,
} = userSlice.actions;

export default userSlice.reducer;
