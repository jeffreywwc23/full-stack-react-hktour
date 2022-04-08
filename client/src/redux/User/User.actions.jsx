import axios from "axios";
import UserActionTypes from "./User.types";
import bookTour from "../../utils/stripe";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginAction = (loginState, history) => {
  return async (dispatch) => {
    try {
      const Origin = window.location.origin;
      const res = await axios.post(`${Origin}/api/v1/users/login`, loginState);
      const { data } = res;
      dispatch({
        type: UserActionTypes.LOGIN_SUCCESS,
        payload: data,
      });
      toast.success(data.status);
      history.push("/");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserActionTypes.LOGIN_FAIL,
          payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
      }
    }
  };
};

export const GoogleLoginAction = (
  googleloginState,
  GoogleAccessToken,
  history
) => {
  return async (dispatch) => {
    try {
      const Origin = window.location.origin;
      const res = await axios.post(
        `${Origin}/api/v1/users/google-login`,
        googleloginState,
        {
          GoogleAccessToken,
        }
      );
      const { data } = res;
      dispatch({
        type: UserActionTypes.GOOGLE_LOGIN_SUCCESS,
        payload: data,
      });
      toast.success(data.status);
      history.push("/");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserActionTypes.GOOGLE_LOGIN_FAIL,
          payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
      }
    }
  };
};

export const FacebookLoginAction = (
  facebookLoginState,
  FbAccessToken,
  history
) => {
  return async (dispatch) => {
    try {
      const Origin = window.location.origin;

      const res = await axios.post(
        `${Origin}/api/v1/users/facebook-login`,
        facebookLoginState,
        {
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded, application/json",
            accept:
              "text/plain, */*, application/x-www-form-urlencoded, application/json",
          },
          FbAccessToken,
        }
      );
      const { data } = res;
      dispatch({
        type: UserActionTypes.FACEBOOK_LOGIN_SUCCESS,
        payload: data,
      });
      toast.success(data.status);
      history.push("/");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserActionTypes.FACEBOOK_LOGIN_FAIL,
          payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
      }
    }
  };
};

export const LogOutAction = (navigate) => {
  return async (dispatch) => {
    try {
      const Origin = window.location.origin;
      const res = await axios.get(`${Origin}/api/v1/users/logout`);
      const { data } = res;
      dispatch({
        type: UserActionTypes.LOGOUT_SUCCESS,
        payload: data,
      });
      toast.success(data.status);
      navigate("/");
      // history.push("/");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserActionTypes.LOGOUT_FAIL,
          payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
      }
    }
  };
};

export const SignUpAction = (signUpState, history) => {
  return async (dispatch) => {
    try {
      const Origin = window.location.origin;
      const res = await axios.post(
        `${Origin}/api/v1/users/signup`,
        signUpState
      );
      const { data } = res;
      dispatch({
        type: UserActionTypes.SIGNUP_SUCCESS,
        payload: data,
      });
      toast.success("Sign Up Successfully");
      history.push("/");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserActionTypes.SIGNUP_FAIL,
          payload: error.response.data.message,
        });
        toast.error("Sign Up Fail! There are something wrong in your input!");
      }
    }
  };
};

export const ForgotPasswordAction = (emailState, history) => {
  return async (dispatch) => {
    try {
      const Origin = window.location.origin;
      const res = await axios.post(
        `${Origin}/api/v1/users/forgotPassword`,
        emailState
      );
      const { data } = res;
      dispatch({
        type: UserActionTypes.FORGOT_SUCCESS,
        payload: data,
      });
      toast.success(data.message);
      history.push("/");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserActionTypes.FORGOT_FAIL,
          payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
      }
    }
  };
};

export const ResetPasswordAction = (resetPasswordState, token, history) => {
  return async (dispatch) => {
    try {
      const Origin = window.location.origin;
      const res = await axios.patch(
        `${Origin}/api/v1/users/resetPassword/${token}`,
        resetPasswordState
      );
      const { data } = res;
      dispatch({
        type: UserActionTypes.RESET_PASSWORD_SUCCESS,
        payload: data,
      });
      toast.success("Reset Password Successfully! Please log in again!");
      history.push("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch({
          type: UserActionTypes.RESET_PASSWORD_FAIL,
          payload: error.response.data.message,
        });
        toast.error(
          "New Password and New Confirmed Password are not the same!"
        );
      }
    }
  };
};

export const UpdatePasswordAction = (updatePasswordState, token, history) => {
  return async (dispatch) => {
    try {
      const Origin = window.location.origin;
      const res = await axios.patch(
        `${Origin}/api/v1/users/updateMyPassword`,
        updatePasswordState,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = res;
      dispatch({
        type: UserActionTypes.UPDATE_PASSWORD_SUCCESS,
        payload: data,
      });
      toast.success("Update Password Successfully");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserActionTypes.UPDATE_PASSWORD_FAIL,
          payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
      }
    }
  };
};

export const DirectCheckOutAction = (tourId, token) => {
  return async (dispatch) => {
    try {
      bookTour(tourId, token);
      dispatch({
        type: UserActionTypes.BOOKING_SUCCESS,
      });
      toast.success("Direct you to check out!");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserActionTypes.BOOKING_FAIL,
          payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
      }
    }
  };
};

export const GetBookingDataAction = (token) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:3000/api/v1/users/my-tours",
        token,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = res;
      dispatch({
        type: UserActionTypes.GET_BOOKING_DATA_SUCCESS,
        payload: data,
      });
      toast.success("Getting Your Booking Data Successfully");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: UserActionTypes.GET_BOOKING_DATA_FAIL,
          payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
      }
    }
  };
};
