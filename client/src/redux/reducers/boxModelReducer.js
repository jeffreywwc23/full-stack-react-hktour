import {
  createSlice,
  //   configureStore,
  //   current,
  //   ThunkAction,
  //   Action,
} from "@reduxjs/toolkit";

const initialState = {
  boxContent: [
    {
      id: 1,
      title: "Luxury Holidays",
      imageUrl:
        "https://toursoman.com/blog/wp-content/uploads/2019/11/Oman-tours-toursoman.jpg",
      label: "Fuel your soul with travel",
    },
    {
      id: 2,
      title: "Countryside",
      imageUrl:
        "https://i.pinimg.com/originals/f5/47/0d/f5470dbab193213008f72d2605885dd7.jpg",
      label: "A route to explore nature's majesty",
    },
    {
      id: 3,
      title: "Backpacking",
      imageUrl:
        "https://gynq24frae0toxfhwxxdjuk5j12x-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/wanderer-455338_1920_optimized-768x460@2x.jpg",
      label: "Packed with adventure and nature",
    },
    {
      id: 4,
      title: "Family Trips",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-happy-quotes-1574799429.jpg?crop=1.00xw:0.813xh;0,0.0519xh&resize=1200:*",
      label: "Treasure the time with your love",
    },
  ],
};

const boxModelSlice = createSlice({
  name: "boxModel",
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
export const { setRoomInfo } = boxModelSlice.actions;

export const boxModel = boxModelSlice.reducer;
