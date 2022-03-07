import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MyApolloProvider from "./contexts/myApolloProvider";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.sass";
import "./variable-animation.css";

ReactDOM.render(
  <React.StrictMode>
    <MyApolloProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </MyApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
