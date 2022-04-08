import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userState: {
    userInfo: [],
    userBooking: [],
    isLogin: false,
    hasError: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        userState: action.payload,
      };
    },
  },
});

// Actions
export const { setUser } = userSlice.actions;

export const user = userSlice.reducer;
