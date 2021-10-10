import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
