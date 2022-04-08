import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  servicesContent: [
    {
      id: 1,
      title: "unique",
      imageUrl: "https://wallpaperaccess.com/full/1408398.jpg",
      text: "Tailored to the needs of our customers",
    },
    {
      id: 2,
      title: "immersive",
      imageUrl:
        "https://content.api.news/v3/images/bin/8e22861ab7d4ddb83e10590b9ea5d3b6?width=1280",
      text: "Truly experience each destination rather than view it",
    },
    {
      id: 3,
      title: "quality",
      imageUrl:
        "https://cdn.shortpixel.ai/spai/w_1201+q_lossy+ret_img+to_webp/https://toomanyadapters.com/wp-content/uploads/2019/01/Laptop-map-camera.jpg",
      text: "Comprehensive travel arrangements for all budgets with multilingual personal guides and escorts",
    },
  ],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setRoomInfo: (state, action) => {
      return {
        ...state,
        roomInfo: action.payload,
      };
    },
  },
});

// Actions
export const { setRoomInfo } = servicesSlice.actions;

export const services = servicesSlice.reducer;
