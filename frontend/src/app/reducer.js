import { createSlice } from "@reduxjs/toolkit";

export const memberSlice = createSlice({
  name: "member",
  initialState: {
    token: null,
    userEmail: null,
    userName: null,
  },
  reducers: {
    getToken: (state, action) => {
      state.token = action.payload.token;
      console.log(action);
    },
    getMemberInfo: (state, action) => {
      state.userEmail = action.payload.email;
      state.userName = action.payload.name;
    },
    refreshMemberInfo: (state) => {
      state.token = null;
      state.userEmail = null;
      state.userName = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getToken, getMemberInfo, refreshMemberInfo } =
  memberSlice.actions;

export default memberSlice.reducer;
