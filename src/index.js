import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Helmet } from "react-helmet";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>ぼくらのチャット</title>
      <script
        async
        defer
        data-website-id="8e9e2983-0921-4bef-87e6-e9e6e4f3d2b8"
        src="https://may-umami.vercel.app/umami.js"
      ></script>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
