import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS, LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_ERROR } from "../../types";
import { api } from "../../../services";

export const logIn = () => {
    return {
        type: LOGIN_SUCCESS,
        isLoggedIn: true,
    }
}

export const auth = (history) => async dispatch => {
    dispatch({ type: LOGIN_START });
    try {
        const info = await api.getInfoAboutMe();
        if (info) {
            dispatch(logIn());
            history.push('/');
        }
    } catch (e) {
        dispatch({
            type: LOGIN_ERROR,
            error: e,
        });
    }
}

export const signIn = (email, password, history) => async dispatch => {
    dispatch({ type: LOGIN_START });

    try {
        const isLogged = await api.logIn(email, password);
        dispatch(logIn());
        history.push('/');
    } catch (e) {
        dispatch({
            type: LOGIN_ERROR,
            error: e,
        });
    }
};

export const logOut = (history) => async dispatch => {
    dispatch({ type: LOGOUT_START });
    try {
        await api.logOut();

        dispatch({
            type: LOGOUT_SUCCESS,
            isLoggedIn: false,
        });

        history.push('/home');

    } catch (e) {
        dispatch({
            type: LOGOUT_ERROR,
            error: e,
        });
    }
};