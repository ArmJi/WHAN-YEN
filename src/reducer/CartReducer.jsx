import { Product } from "../constants/data";

const CartReducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      products: state.products.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "ADD_QUANTITY") {
    let updateProducts = state.products.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }
      return item;
    });
    return {
      ...state,
      products: updateProducts,
    };
  }
  if (action.type === "REDUCE_QUANTITY") {
    let updateProducts = state.products
      .map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        }
        return item;
      })
      .filter((item) => item.qty !== 0);
    return {
      ...state,
      products: updateProducts,
    };
  }
  if (action.type === "CAL_TOTAL") {
    const { total, amount } = state.products.reduce(
      (cartTotal, item) => {
        const { price, qty } = item;
        const totalPrice = price * qty;
        cartTotal.total += totalPrice;
        cartTotal.amount += qty;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    return {
      ...state,
      total,
      amount,
    };
  }
  if (action.type === "ADD_CART") {
    let positionProduct = state.products.findIndex(
      (item) => item.id == action.payload
    );
    if (state.products.length <= 0) {
      return {
        ...state,
        products: [
          ...state.products,
          ...Product.filter((item) => item.id === action.payload),
        ],
      };
    } else if (positionProduct < 0) {
      return {
        ...state,
        products: [
          ...state.products,
          ...Product.filter((item) => item.id === action.payload),
        ],
      };
    } else {
      let updateProducts = state.products.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });
      return {
        ...state,
        products: updateProducts,
      };
    }
  }
};
export default CartReducer;
