import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import "./index.css";
import App from "./App";
import GlobalStyle from "./theme/globalStyle";

ReactDOM.render(
  <Provider store={store}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
