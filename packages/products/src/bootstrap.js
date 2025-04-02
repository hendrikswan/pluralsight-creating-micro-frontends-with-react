import React from "react";
import ReactDOM from "react-dom/client";
import Products from "./Products";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "cart/CartContext";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <CartProvider>
      <Products />
    </CartProvider>
  </BrowserRouter>
);
