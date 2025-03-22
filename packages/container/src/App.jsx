import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={"Loading"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<RemoteProducts />}>
            <Route path="*" element={<RemoteProducts />} />
          </Route>
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
