import * as pd from "../Constants/ProductConstant";
import axios from "axios";

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: pd.ALL_PRODUCT_REQUEST,
    });
    let link = "/getallproduct";
    const { data } = await axios.get(link);
    // console.log(data);
    dispatch({
      type: pd.ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: pd.ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getProductDetail = (id) => async (dispatch) => {
  // console.log(id);
  try {
    dispatch({
      type: pd.PRODUCT_DETAILS_REQUEST,
    });
    let link = `/getproductdetail/${id}`;
    const { data } = await axios.get(link);
    console.log(data.records.image[0].url);
    dispatch({
      type: pd.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: pd.PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getProductBycategory = (cname) => async (dispatch) => {
  try {
    dispatch({
      type: pd.CATEGORY_PRODUCT_REQUEST,
    });
    let link = `/findbycategory/${cname}`;
    const { data } = await axios.get(link);
    console.log(data);
    dispatch({
      type: pd.CATEGORY_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: pd.CATEGORY_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
