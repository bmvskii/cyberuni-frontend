import { LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_ERROR } from '../types'

const initialState = {
    authToken: null,
    role: null,
    isLoggedIn: false,
    error: ''
};

export default (state = initialState, { type, isLoggedIn, error }) => {
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn,
                error: '',
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error,
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn,
            }

        default:
            return state;
    }
};