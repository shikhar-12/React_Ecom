import {
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,
} from "../Constants/CategoryConstant";
import axios from "axios";

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_CATEGORY_REQUEST,
    });
    let link = "/categorydisplay";
    const { data } = await axios.get(link);
    // console.log(data);
    dispatch({
      type: ALL_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};
