import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import {reducer} from "./Reducers"

const store = createStore(reducer, applyMiddleware(thunk,logger))
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
