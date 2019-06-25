import { FETCH_TODOS_SUCCESS, REMOVE_TODOS_SUCCESS, ADD_TODOS_SUCCESS } from '../types'

const initialState = {
    todos: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos: payload
            }
        case REMOVE_TODOS_SUCCESS: {
            return state;
        }
        case ADD_TODOS_SUCCESS :{
            return state;
        }
        default:
            return state;
    }
};