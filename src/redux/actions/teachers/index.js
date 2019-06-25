import { FETCH_ALL_TEACHERS_ERROR, FETCH_ALL_TEACHERS_START, FETCH_ALL_TEACHERS_SUCCESS, FETCH_TEACHER_BY_ID_SUCCESS, FETCH_TEACHER_BY_ID_START, FETCH_TEACHER_BY_ID_ERROR } from "../../types";
import { api } from "../../../services";


export const fetchTeachers = () => async dispatch => {
    dispatch({ type: FETCH_ALL_TEACHERS_START });

    try {
        const teachers = await api.getMyTeachers();
        dispatch({
            type: FETCH_ALL_TEACHERS_SUCCESS,
            payload: teachers,
        });
    } catch (e) {
        dispatch({
            type: FETCH_ALL_TEACHERS_ERROR,
            error: e,
        });
    }
};

export const fetchTeacherById = (id) => async dispatch => {
    dispatch({ type: FETCH_TEACHER_BY_ID_SUCCESS });

    try {
        const teacher = await api.getTeacherById(id);
        dispatch({
            type: FETCH_TEACHER_BY_ID_SUCCESS,
            payload: teacher,
        });
    } catch (e) {
        dispatch({
            type: FETCH_TEACHER_BY_ID_ERROR,
            error: e,
        });
    }
};