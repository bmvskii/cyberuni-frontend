import { FETCH_ALL_SUBJECTS_SUCCESS } from '../types'

const initialState = {
    subjects: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_SUBJECTS_SUCCESS:
            return {
                ...state,
                subjects: payload
            }

        default:
            return state;
    }
};