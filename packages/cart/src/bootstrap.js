import React from "react";
import ReactDOM from "react-dom/client";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";
import { ProductsProvider } from "products/ProductsContext";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <ProductsProvider>
    <CartProvider>
      <Cart />
    </CartProvider>
  </ProductsProvider>
);
