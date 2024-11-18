import { createContext, useReducer, useState } from "react";
import { CartInicialState, CartReducer } from "../Reducer/CartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(CartReducer, CartInicialState);
    

  const llamada = () =>dispatch({
      type: "Hola",
  });
  const saludo = () => dispatch({
    type:"Adios",
  })

  return (
    <CartContext.Provider value={{ cart: state, llamada, saludo }}>
      {children}
    </CartContext.Provider>
  );
}
