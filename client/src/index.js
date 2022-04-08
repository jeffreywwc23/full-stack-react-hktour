import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { persistor, store } from "./redux/store";
import { persistStore } from "redux-persist";
import { BrowserRouter } from "react-router-dom";
import configureAppStore from "./redux/configureStore";
import { RouterProvider } from "./utils/routeContext";

const store = configureAppStore();

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <RouterProvider>
          <App />
        </RouterProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
