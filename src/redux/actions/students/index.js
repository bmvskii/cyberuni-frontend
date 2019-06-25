import { FETCH_ALL_STUDENTS_ERROR, FETCH_ALL_STUDENTS_START, FETCH_ALL_STUDENTS_SUCCESS } from "../../types";
import { api } from "../../../services";

// const api = new Api();

export const fetchStudents = () => async (dispatch, getState) => {
    dispatch({ type: FETCH_ALL_STUDENTS_START });

    try {
        const students = await api.getAllStudents();
        
        dispatch({
            type: FETCH_ALL_STUDENTS_SUCCESS,
            payload: students,
        })

    } catch (e) {
        dispatch({
            type: FETCH_ALL_STUDENTS_ERROR,
            error: e,
        })
    }
};