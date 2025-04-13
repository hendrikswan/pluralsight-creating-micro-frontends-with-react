import React, { useState } from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import { CartProvider } from "cart/CartContext";

export default function App() {
  const [recommendations, setRecommendations] = useState({});
  function viewedProduct(product) {
    setRecommendations((prev) => ({ ...prev, [product.id]: product }));
  }

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products/*"
            element={<RemoteProducts viewedProduct={viewedProduct} />}
          />
          <Route
            path="/cart"
            element={<RemoteCart recommendations={recommendations} />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

function HomePage() {
  return <div>Welcome to our micro-frontend store!</div>;
}

function RemoteProducts({ viewedProduct }) {
  const Products = React.lazy(() => import("products/Products"));
  return (
    <React.Suspense fallback={<div>Loading Products...</div>}>
      <Products viewedProduct={viewedProduct} />
    </React.Suspense>
  );
}

function RemoteCart({ recommendations }) {
  const Cart = React.lazy(() => import("cart/Cart"));
  return (
    <React.Suspense fallback={<div>Loading Cart...</div>}>
      <Cart recommendations={recommendations} />
    </React.Suspense>
  );
}
