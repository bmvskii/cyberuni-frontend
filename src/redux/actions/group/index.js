import { FETCH_MY_GROUP_INFO_ERROR, FETCH_MY_GROUP_INFO_START, FETCH_MY_GROUP_INFO_SUCCESS } from "../../types";
import { api } from "../../../services";
import { fetchMyInfo } from "../user";

export const fetchMyGroup = () => async (dispatch) => {
    dispatch({ type: FETCH_MY_GROUP_INFO_START });
    
    try {
        const { group: id } = await dispatch(fetchMyInfo());
        const group = await api.getGroupById(id);

        dispatch({
            type: FETCH_MY_GROUP_INFO_SUCCESS,
            payload: group,
        })

    } catch (e) {
        dispatch({
            type: FETCH_MY_GROUP_INFO_ERROR,
            error: e,
        })
    }
};