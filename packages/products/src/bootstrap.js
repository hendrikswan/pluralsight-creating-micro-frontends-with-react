import React from "react";
import ReactDOM from "react-dom/client";
import Products from "./Products";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "cart/CartContext";
import { ProductsProvider } from "./ProductsContext";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <ProductsProvider>
      <CartProvider>
        <Products />
      </CartProvider>
    </ProductsProvider>
  </BrowserRouter>
);
