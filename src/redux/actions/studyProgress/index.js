import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS, LOGOUT_START, LOGOUT_SUCCESS } from "../../types";
import { MockApi } from "../../../services";

const api = new MockApi();

export const logIn = () => async dispatch => {
    dispatch({ type: LOGIN_START });

    setTimeout(() => {
        dispatch({
            type: LOGIN_SUCCESS,
            isLoggedIn: true,
        })
    }, 700);
};

export const logOut = () => async dispatch => {
    dispatch({ type: LOGOUT_START });

    setTimeout(() => {
        dispatch({
            type: LOGOUT_SUCCESS,
            isLoggedIn: false,
        })
    }, 700);
};