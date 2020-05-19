import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import weatherReducer from "./store/reducers/currentWeather";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] action: ", action);
      const result = next(action);
      console.log("[Middleware] store: ", store.getState());
      return result;
    };
  };
};

const store = createStore(weatherReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
