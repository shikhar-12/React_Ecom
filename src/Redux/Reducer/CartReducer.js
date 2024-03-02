import * as cartConstant from "../Constants/CartConstant";
import axios from "axios";

export const cartReducer = (
  state = { cartItem: [], shippingInfo: {} },
  action
) => {
  switch (action.type) {
    case cartConstant.ADD_TO_CART:
      const item = action.payload;
      const isItemExist = state.cartItem.find(
        (i) => i.product === item.product
      );
      if (isItemExist) {
        return {
          ...state,
          cartItem: state.cartItem.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, item],
        };
      }
    case cartConstant.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItem: state.cartItem.filter((i) => i.product !== action.payload),
      };
    case cartConstant.SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };
    default:
      return state;
  }
};
