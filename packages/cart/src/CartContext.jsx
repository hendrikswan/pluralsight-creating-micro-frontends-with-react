import React, { createContext, useContext, useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (_, i) =>
            i !== state.items.findIndex((item) => item === action.payload)
        ),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
}

const initialState = {
  items: ["Laptop", "Mobile"],
};

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (itemName) =>
    dispatch({ type: "ADD_ITEM", payload: itemName });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  const removeItem = (itemName) =>
    dispatch({ type: "REMOVE_ITEM", payload: itemName });

  const value = {
    items: state.items,
    addItem,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
