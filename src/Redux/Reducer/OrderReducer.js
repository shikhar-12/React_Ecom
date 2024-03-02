import * as OrderConst from "../Constants/OrderConstant";

export const newOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case OrderConst.CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case OrderConst.CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case OrderConst.CREATE_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case OrderConst.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const myOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case OrderConst.MY_ORDERS_REQUEST:
      return {
        loading: true,
      };
    case OrderConst.MY_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };

    case OrderConst.MY_ORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case OrderConst.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
