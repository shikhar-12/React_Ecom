import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryReducer } from "./Reducer/CategoryReducer";
import {
  productReducer,
  productDetailReducer,
  categoryproductReducer,
} from "./Reducer/ProductReducer";
import { cartReducer } from "./Reducer/CartReducer";
import { authReducer } from "./Reducer/UserReducer";
import { updateprofileReducer } from "./Reducer/UserReducer";
import { newOrderReducer, myOrdersReducer } from "./Reducer/OrderReducer";

const reducer = combineReducers({
  cat: categoryReducer,
  prod: productReducer,
  proddetail: productDetailReducer,
  cpr: categoryproductReducer,
  cart: cartReducer,
  user: authReducer,
  upc: updateprofileReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
});

let initializeState = {
  cart: {
    cartItem: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : [],
  },
};

// const middleware = [thunk]

const store = createStore(
  reducer,
  initializeState,
  composeWithDevTools(applyMiddleware(thunk))
);

// const store = createStore(reducer, initializeState);

export default store;
