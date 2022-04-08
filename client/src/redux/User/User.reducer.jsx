import UserActionTypes from './User.types';

const INITITAL_STATE = {
    userState: [],
    userBooking: [],
    isLogin: false,
    hasError: false,
}

const userReducer = (state = INITITAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.LOGIN_SUCCESS:
            return {
                userState: action.payload,
                isLogin: true,
                hasError: false,
            }

        case UserActionTypes.LOGOUT_SUCCESS:
            return {
                userState: [],
                isLogin: false,
                hasError: false,
            }

        case UserActionTypes.SIGNUP_SUCCESS:
            return {
                userState: action.payload,
                isLogin: true,
                hasError: false,
            }

        case UserActionTypes.FORGOT_SUCCESS:
            return {
                userState: [],
                isLogin: false,
                hasError: false,
            }

        case UserActionTypes.RESET_PASSWORD_SUCCESS:
            return {
                userState: [],
                isLogin: false,
                hasError: false,
            }

        case UserActionTypes.UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                isLogin: true,
            }


        case UserActionTypes.BOOKING_SUCCESS:
            return {
                ...state,
                isLogin: true,
            }

        case UserActionTypes.GET_BOOKING_DATA_SUCCESS:
            return {
                ...state,
                userBooking: action.payload,
                isLogin: true,
            }

        case UserActionTypes.GOOGLE_LOGIN_SUCCESS:
            return {
                userState: action.payload,
                isLogin: true,
                hasError: false,
            }

        case UserActionTypes.FACEBOOK_LOGIN_SUCCESS:
            return {
                userState: action.payload,
                isLogin: true,
                hasError: false,
            }

        /**/
        case UserActionTypes.LOGIN_FAIL:
            return {
                ...state,
                hasError: true,
            };

        case UserActionTypes.LOGOUT_FAIL:
            return {
                ...state,
                isLogin: true,
                hasError: true,
            };

        case UserActionTypes.SIGNUP_FAIL:
            return {
                ...state,
                hasError: true,
            };

        case UserActionTypes.FORGOT_FAIL:
            return {
                ...state,
                hasError: true,
            };

        case UserActionTypes.RESET_PASSWORD_FAIL:
            return {
                ...state,
                hasError: true,
            };

        case UserActionTypes.UPDATE_PASSWORD_FAIL:
            return {
                ...state,
                isLogin: true,
                hasError: true,
            };

        case UserActionTypes.BOOKING_FAIL:
            return {
                ...state,
                isLogin: true,
                hasError: true,
            }

        case UserActionTypes.GET_BOOKING_DATA_FAIL:
            return {
                ...state,
                isLogin: true,
                hasError: true,
            }

        case UserActionTypes.GOOGLE_LOGIN_FAIL:
            return {
                ...state,
                hasError: true,
            };

        case UserActionTypes.FACEBOOK_LOGIN_FAIL:
            return {
                ...state,
                hasError: true,
            };

        default:
            return state;
    }
}

export default userReducer;