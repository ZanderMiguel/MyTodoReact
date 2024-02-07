import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ColorChange from "./challenges/ColorChange";
import Layout from "./TodoList/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ColorChange /> */}
    <Layout />
  </React.StrictMode>
);
