import { FETCH_ALL_TEACHERS_SUCCESS, FETCH_TEACHER_BY_ID_SUCCESS } from '../types'

const initialState = {
    teachers: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_TEACHERS_SUCCESS:
            return {
                ...state,
                teachers: payload
            }
        case FETCH_TEACHER_BY_ID_SUCCESS:
            if (payload) {
                if (!state.teachers) {
                    return {
                        ...state,
                        teachers: [payload]
                    };
                } else {
                    return {
                        ...state,
                        teachers: state.teachers.concat(payload)
                    };
                }
            }

        default:
            return state;
    }
};