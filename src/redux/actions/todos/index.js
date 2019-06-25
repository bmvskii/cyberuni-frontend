import { api } from "../../../services";
import {
    FETCH_TODOS_START,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_ERROR,
    ADD_TODOS_ERROR,
    ADD_TODOS_SUCCESS,
    ADD_TODOS_START,
    REMOVE_TODOS_ERROR,
    REMOVE_TODOS_SUCCESS,
    REMOVE_TODOS_START
} from "../../types";

export const fetchTodos = () => async dispatch => {
    dispatch({ type: FETCH_TODOS_START });
    try {
        const tasks = await api.getMyTasks();
        dispatch({
            type: FETCH_TODOS_SUCCESS,
            payload: tasks,
        });
    } catch (e) {
        dispatch({
            type: FETCH_TODOS_ERROR,
            error: e,
        });
    }
};

export const addTodo = () => async dispatch => {
    dispatch({ type: ADD_TODOS_START });
    try {
        const tasks = await api.getMyTasks();
        dispatch({
            type: ADD_TODOS_SUCCESS,
            payload: tasks,
        });
    } catch (e) {
        dispatch({
            type: ADD_TODOS_ERROR,
            error: e,
        });
    }
};

export const removeTodo = () => async dispatch => {
    dispatch({ type: REMOVE_TODOS_START });
    try {
        const tasks = await api.getMyTasks();
        dispatch({
            type: REMOVE_TODOS_SUCCESS,
            payload: tasks,
        });
    } catch (e) {
        dispatch({
            type: REMOVE_TODOS_ERROR,
            error: e,
        });
    }
};