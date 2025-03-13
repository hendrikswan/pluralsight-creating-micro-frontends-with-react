import React from "react";
import "./app.css";

export default function App() {
  return (
    <>
      <HomePage />
      <RemoteProducts />
      <RemoteCart />
    </>
  );
}

function HomePage() {
  return <div>Welcome to our micro-frontend store!</div>;
}

function RemoteProducts() {
  const Products = React.lazy(() => import("product/Products"));
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
