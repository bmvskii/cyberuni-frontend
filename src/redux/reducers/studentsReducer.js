import { FETCH_ALL_STUDENTS_SUCCESS } from '../types'

const initialState = {
    students: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_STUDENTS_SUCCESS:
            return {
                ...state,
                students: payload
            }

        default:
            return state;
    }
};