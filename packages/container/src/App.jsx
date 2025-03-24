import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import { CartProvider } from "cart/CartContext";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/*" element={<RemoteProducts />} />
          <Route path="/cart" element={<RemoteCart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

function HomePage() {
  return <div>Welcome to our micro-frontend store!</div>;
}

function RemoteProducts() {
  const Products = React.lazy(() => import("products/Products"));
  return (
    <React.Suspense fallback={<div>Loading Products...</div>}>
      <Products />
    </React.Suspense>
  );
}

function RemoteCart() {
  const Cart = React.lazy(() => import("cart/Cart"));
  return (
    <React.Suspense fallback={<div>Loading Cart...</div>}>
      <Cart />
    </React.Suspense>
  );
}
