import * as OrderConst from "../Constants/OrderConstant";
import axios from "axios";

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: OrderConst.CREATE_ORDER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/order/create", order, config);
    dispatch({ type: OrderConst.CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: OrderConst.CREATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: OrderConst.MY_ORDERS_REQUEST });
    const { data } = await axios.get("/order/myorder");
    console.log("order in action--->>", data);
    dispatch({ type: OrderConst.MY_ORDERS_SUCCESS, payload: data.order });
  } catch (error) {
    dispatch({
      type: OrderConst.MY_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = async (dispatch) => {
  dispatch({ type: OrderConst.CLEAR_ERRORS });
};
