import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App nome="Jeff" idade={10} cpf="18512494222" />
  </React.StrictMode>
);
