import { FETCH_USER_INFO_SUCCESS, FETCH_USER_INFO_START, FETCH_USER_INFO_ERROR } from "../../types";
import { api } from "../../../services";

export const fetchMyInfo = () => async (dispatch) => {
    dispatch({ type: FETCH_USER_INFO_START });

    try {
        const info = await api.getInfoAboutMe();
        const semester = await api.getMySemester();

        if (info && semester) {
           dispatch({
                type: FETCH_USER_INFO_SUCCESS,
                payload: {
                    ...info,
                    semester,
                }
            })
            return info;
        } 
    } catch (e) {
        dispatch({
            type: FETCH_USER_INFO_ERROR,
            error: e,
        })
    }
};
