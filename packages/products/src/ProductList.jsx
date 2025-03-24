import React, { useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";
import { useCart } from "cart/CartContext";

export const DUMMY_PRODUCTS = [
  { id: 1, name: "Laptop", price: 899 },
  { id: 2, name: "Headphones", price: 199 },
  { id: 3, name: "Smartphone", price: 699 },
  { id: 4, name: "Monitor", price: 349 },
];

export default function ProductList() {
  const [products] = useState(DUMMY_PRODUCTS);
  const { addItem } = useCart();

  return (
    <div>
      <h2>Product Catalog</h2>

      <div className="product-list">
        {products.map((p) => (
          <div className="product" key={p.id}>
            <div>
              {p.name} <b>${p.price}</b>
            </div>

            <div className="product-actions">
              <Link to={`${p.id}`} className="button">
                View Detail
              </Link>
              <button className="button" onClick={() => addItem(p.name)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
