import { getAllRooms } from "../Reducers/RoomReducer"
import { apiCall } from "./api"


export const fetchAllRooms = () => async (dispatch) => {
    const onSuccess = (data) => {
        dispatch(getAllRooms(data))
    }
    const onFailure = (err) => {
        console.log("error: ", err)
    }
    await apiCall("/props", undefined, undefined, undefined, onSuccess, onFailure);
}