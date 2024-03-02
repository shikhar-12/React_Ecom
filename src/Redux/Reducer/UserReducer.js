import * as UserConst from "../Constants/UserConstant";

export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case UserConst.REGISTER_USER_REQUEST:
    case UserConst.LOGIN_REQUEST:
    case UserConst.LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case UserConst.REGISTER_USER_SUCCESS:
    case UserConst.LOGIN_SUCCESS:
    case UserConst.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case UserConst.REGISTER_USER_FAIL:
    case UserConst.LOGIN_FAIL:
      // case UserConst.LOAD_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: null,
        error: action.payload,
      };
    case UserConst.LOGOUT_SUCCESS:
      return {
        loading: true,
        isAuthenticated: false,
        user: null,
      };
    case UserConst.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserConst.CLEAR_ERRORS:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export const updateprofileReducer = (state = {}, action) => {
  switch (action.type) {
    case UserConst.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UserConst.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case UserConst.UPDATE_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserConst.UPDATE_PROFILE_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case UserConst.CLEAR_ERRORS:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
