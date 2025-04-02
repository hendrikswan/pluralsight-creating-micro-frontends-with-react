import React from "react";
import "./cart.css";
import { useCart } from "./CartContext";

export default function Cart({ recommendations }) {
  const { items, addItem, removeItem, clearCart } = useCart();

  const groupedItems = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {Object.entries(groupedItems).map(([itemId, quantity]) => (
              <li key={itemId} className="cart-item">
                <span className="item-name">{itemId}</span>
                <span>Quantity: {quantity}</span>
                <div className="quantity-controls">
                  <button onClick={() => removeItem(itemId)}>-</button>
                  <button onClick={() => addItem(itemId)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
