import { configureStore } from "@reduxjs/toolkit";
import monitorReducersEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from "./middlewares/logger";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { user } from "./reducers/userReducer";
import { tours } from "./reducers/toursReducer";
import { imageGallery } from "./reducers/imageGalleryReducer";
import { boxModel } from "./reducers/boxModelReducer";
import { featureTours } from "./reducers/featureToursReducer";
import { services } from "./reducers/servicesReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user", "tours"],
};

const reducers = combineReducers({
  //   userContainer: userReducer,
  //   tourContainer: tourReducer,
  //   imageGalleryContainer: imageGalleryReducer,
  //   boxModelContainer: BoxModelReducer,
  //   featureToursContainer: featureToursReducer,
  //   servicesContainer: servicesReducer,

  user,
  tours,
  imageGallery,
  boxModel,
  featureTours,
  services,
});
const persistedReducer = persistReducer(persistConfig, reducers);

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    // reducer: reducers,
    reducer: persistedReducer,
    // middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    middleware: (getDefaultMiddleware) => {
      return [
        loggerMiddleware,
        thunk,
        ...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      ];
    },
    preloadedState,
    enhancers: [monitorReducersEnhancer],
  });

  // if (process.env.NODE_ENV !== "production" && module.hot) {
  //   module.hot.accept("./reducers/reducer", () =>
  //     store.replaceReducer(RoomSlice)
  //   );
  // }

  return store;
}
