import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Products from "./Products";

const mount = (el) => {
  const root = ReactDOM.createRoot(el);
  root.render(
    // Only use BrowserRouter when running standalone
    window.location.port === "3001" ? (
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    ) : (
      <Products />
    )
  );
};

// If we are in development and running standalone
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("root");
  if (el) {
    mount(el);
  }
}

export { mount };
