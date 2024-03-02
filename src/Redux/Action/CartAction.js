import * as cartConstant from "../Constants/CartConstant";
import axios from "axios";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/getproductdetail/${id}`);
  //console.log(data);
  dispatch({
    type: cartConstant.ADD_TO_CART,
    payload: {
      product: data.records._id,
      name: data.records.name,
      price: data.records.price,
      image: data.records.image[0].url,
      stock: data.records.stock,
      quantity,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItem));
};

export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: cartConstant.REMOVE_CART_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItem));
};

export const saveShippingInfo = (data) => async (dispatch) => {
  console.log(data);
  dispatch({
    type: cartConstant.SAVE_SHIPPING_INFO,
    payload: data,
  });
  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
