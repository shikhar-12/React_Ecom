import * as pd from "../Constants/ProductConstant";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case pd.ALL_PRODUCT_REQUEST: {
      return {
        loading: true,
        products: [],
      };
    }
    case pd.ALL_PRODUCT_SUCCESS: {
      return {
        loading: false,
        products: action.payload.records,
      };
    }
    case pd.ALL_PRODUCT_FAIL: {
      return {
        loading: false,
        error: action.payload,
      };
    }
    case pd.CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};

export const productDetailReducer = (state = { productdetail: {} }, action) => {
  switch (action.type) {
    case pd.PRODUCT_DETAILS_REQUEST: {
      return {
        loading: true,
        productdetail: {},
      };
    }
    case pd.PRODUCT_DETAILS_SUCCESS: {
      return {
        loading: false,
        productdetail: action.payload.records,
      };
    }
    case pd.PRODUCT_DETAILS_FAIL: {
      return {
        loading: false,
        error: action.payload,
      };
    }
    case pd.CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};

export const categoryproductReducer = (
  state = { categoryproducts: [] },
  action
) => {
  switch (action.type) {
    case pd.CATEGORY_PRODUCT_REQUEST: {
      return {
        loading: true,
        categoryproducts: [],
      };
    }
    case pd.CATEGORY_PRODUCT_SUCCESS: {
      return {
        loading: false,
        categoryproducts: action.payload.records,
      };
    }
    case pd.CATEGORY_PRODUCT_FAIL: {
      return {
        loading: false,
        error: action.payload,
      };
    }
    case pd.CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};
