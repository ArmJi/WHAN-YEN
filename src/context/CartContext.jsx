import { createContext, useContext, useReducer, useEffect } from "react";
import CartReducer from "../reducer/CartReducer";

const CartContext = createContext();

const initState = {
  products: JSON.parse(localStorage.getItem("productCart")) || [],
  total: 0,
  amount: 0,
};

export const CartProivider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initState);
  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }
  function addQuantity(id) {
    dispatch({ type: "ADD_QUANTITY", payload: id });
  }
  function reduceQuantity(id) {
    dispatch({ type: "REDUCE_QUANTITY", payload: id });
  }
  function addCart(id) {
    dispatch({ type: "ADD_CART", payload: id });
  }
  useEffect(() => {
    dispatch({ type: "CAL_TOTAL" });
    localStorage.setItem("productCart", JSON.stringify(state.products));
  }, [state.products]);
  return (
    <CartContext.Provider
      value={{ ...state, removeItem, addQuantity, reduceQuantity, addCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
