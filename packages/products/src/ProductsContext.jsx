import React, { createContext, useContext, useReducer } from "react";

function productsReducer(state, action) {
  switch (action.type) {
    case "VIEWED_PRODUCT":
      return {
        ...state,
        recommendations: {
          ...state.recommendations,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
}

const initialState = {
  recommendations: {},
};

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const viewedProduct = (product) =>
    dispatch({ type: "VIEWED_PRODUCT", payload: product });

  const value = {
    recommendations: state.recommendations,
    viewedProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
