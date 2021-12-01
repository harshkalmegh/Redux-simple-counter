import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MyCounter from "./Features/MyCounter";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyCounter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
