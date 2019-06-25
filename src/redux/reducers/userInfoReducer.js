import { FETCH_USER_INFO_SUCCESS } from '../types'

const initialState = {
    userInfo: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_USER_INFO_SUCCESS:
            return {
                ...state,
                userInfo: payload
            }

        default:
            return state;
    }
};