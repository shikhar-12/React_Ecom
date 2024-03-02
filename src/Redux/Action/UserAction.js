import * as UserConst from "../Constants/UserConstant";
import axios from "axios";

export const register = (myForm) => async (dispatch) => {
  try {
    dispatch({
      type: UserConst.REGISTER_USER_REQUEST,
    });
    const config = {
      headers: { "content-type": "multiparts/form-data" },
    };
    const { data } = await axios.post("/userinsert", myForm, config);
    console.log(data);
    dispatch({
      type: UserConst.REGISTER_USER_SUCCESS,
      payload: data.records,
    });
  } catch (error) {
    dispatch({
      type: UserConst.REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: UserConst.LOGIN_REQUEST,
    });
    const { data } = await axios.post("/verifylogin", {
      email,
      password,
    });
    // console.log(data);
    dispatch({
      type: UserConst.LOGIN_SUCCESS,
      payload: data.records,
    });
  } catch (error) {
    dispatch({
      type: UserConst.LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loaduser = () => async (dispatch) => {
  try {
    dispatch({
      type: UserConst.LOAD_USER_REQUEST,
    });
    const { data } = await axios.get("/getsingleuser");
    console.log(data);
    dispatch({
      type: UserConst.LOAD_USER_SUCCESS,
      payload: data.records,
    });
  } catch (error) {
    dispatch({
      type: UserConst.LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const Logout = () => async (dispatch) => {
  try {
    await axios.get("/logout");
    dispatch({
      type: UserConst.LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: UserConst.LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateprofile = (myForm) => async (dispatch) => {
  try {
    dispatch({
      type: UserConst.UPDATE_PROFILE_REQUEST,
    });
    const config = {
      headers: { "content-type": "multiparts/form-data" },
    };
    const { data } = await axios.post("/updateprofile", myForm, config);
    console.log(data);
    dispatch({
      type: UserConst.UPDATE_PROFILE_SUCCESS,
      payload: data.records,
    });
  } catch (error) {
    dispatch({
      type: UserConst.UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearerror = () => async (dispatch) => {
  dispatch({
    type: UserConst.CLEAR_ERRORS,
  });
};
