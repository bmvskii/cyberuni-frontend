import { FETCH_MY_GROUP_INFO_SUCCESS } from '../types'

const initialState = {
    myGroup: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_MY_GROUP_INFO_SUCCESS:
            return {
                ...state,
                myGroup: payload
            }

        default:
            return state;
    }
};