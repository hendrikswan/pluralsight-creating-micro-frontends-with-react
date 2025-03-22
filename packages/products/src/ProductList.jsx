import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";

const DUMMY_PRODUCTS = [
  { id: 1, name: "Laptop", price: 899 },
  { id: 2, name: "Headphones", price: 199 },
];

export default function ProductList() {
  const [products] = useState(DUMMY_PRODUCTS);

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
              <button className="button" onClick={() => alert("Add to cart")}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
