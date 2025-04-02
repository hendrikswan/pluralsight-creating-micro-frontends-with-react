import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DUMMY_PRODUCTS } from "./ProductList";

export default function ProductDetail({ viewedProduct }) {
  const { id } = useParams();
  const product = DUMMY_PRODUCTS.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  useEffect(() => {
    viewedProduct(product);
  }, [product]);

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Showing detail for product ID: {id}</p>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
