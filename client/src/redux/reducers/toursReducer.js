import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tourState: [],
  hasError: false,
};

const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    setTours: (state, action) => {
      return {
        ...state,
        tourState: action.payload,
      };
    },
  },
});

// Actions
export const { setTours } = toursSlice.actions;

export const tours = toursSlice.reducer;
