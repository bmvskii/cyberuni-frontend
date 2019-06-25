import { FETCH_ALL_SUBJECTS_SUCCESS, FETCH_ALL_SUBJECTS_START, FETCH_ALL_SUBJECTS_ERROR } from "../../types";
import { api } from '../../../services'

export const fetchSubjects = () => async dispatch => {
    dispatch({
        type: FETCH_ALL_SUBJECTS_START
    });

    try {
        const subjects = await api.getMySubjects();
        dispatch({
            type: FETCH_ALL_SUBJECTS_SUCCESS,
            payload: subjects,
        });
    } catch (e) {
        dispatch({
            type: FETCH_ALL_SUBJECTS_ERROR,
            error: true,
        })
    }
}