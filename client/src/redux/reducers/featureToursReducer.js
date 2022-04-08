import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  featureToursContent: [
    {
      id: 1,
      text: "Exciting adventure in the snow with snowboarding and skiing",
      imageUrl: "https://images7.alphacoders.com/598/thumb-1920-598158.jpg",
      label: "Adventure",
    },
    {
      id: 2,
      text: "Exquisite wines, scenic views, exclusive barrel tastings, and much more",
      imageUrl:
        "https://www.wineroad.com/wp-content/uploads/2018/11/barrel-tasting-hero-1024x682.jpg",
      label: "Modern",
    },
    {
      id: 3,
      text: "Feel the majesty of the nature and enjoy the breathtaking hike",
      imageUrl:
        "https://gynq24frae0toxfhwxxdjuk5j12x-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/hiker-918704_1920_optimized-768x512@2x.jpg",
      label: "Mystery",
    },
    {
      id: 4,
      text: "Diging into the history and ancient culture",
      imageUrl:
        "https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      label: "Cultural",
    },
    {
      id: 5,
      text: "The most remote and stunningly beautiful places for seeing the night sky",
      imageUrl:
        "https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      label: "Leisure",
    },
  ],
};

const featureToursSlice = createSlice({
  name: "featureTours",
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
export const { setRoomInfo } = featureToursSlice.actions;

export const featureTours = featureToursSlice.reducer;
