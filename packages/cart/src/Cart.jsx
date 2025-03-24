import React from "react";
import "./cart.css";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload].sort() };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items
          .filter(
            (_, i) =>
              i !== state.items.findIndex((item) => item === action.payload)
          )
          .sort(),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
}

export default function Cart() {
  const [state, dispatch] = React.useReducer(cartReducer, {
    items: ["Laptop", "Mobile"],
  });

  const groupedItems = state.items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {Object.entries(groupedItems).map(([itemId, quantity]) => (
              <li key={itemId} className="cart-item">
                <span className="item-name">{itemId}</span>
                <span>Quantity: {quantity}</span>
                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", payload: itemId })
                    }
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: "ADD_ITEM", payload: itemId })
                    }
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
