import React, { useState } from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import { CartProvider } from "cart/CartContext";

// Step 1: Define a class-based Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Optionally log or track the error here
    // e.g. logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Show an alternate UI, or gracefully degrade
      return <h2>Could not load this part of the site.</h2>;
    }
    return this.props.children;
  }
}

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
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading Products...</div>}>
        <Products viewedProduct={viewedProduct} />
      </React.Suspense>
    </ErrorBoundary>
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
