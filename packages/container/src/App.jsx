import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <React.Suspense fallback={"Loading"}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/*" element={<RemoteProducts />} />
          <Route path="/cart" element={<RemoteCart />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
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
