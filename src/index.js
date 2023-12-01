import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import MyForm from "./MyForm/MyForm";
import TrafficLights from "./TrafficLights/TrafficLights";
import BigASM from "./BigASM/BigASM";
import Mp3Player from "./Mp3Player/Mp3Player";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Mp3Player />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
