import React from "react";
import ReactDOM from "react-dom/client";
import Products from "./Products";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <Products />
  </BrowserRouter>
);
