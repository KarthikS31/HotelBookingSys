import { setBookings } from "../Reducers/BookingsReducer"
import { showPopup } from "../Reducers/PopupReducer"
import { apiCall } from "./api"



export const bookRoom = (data) => async (dispatch) => {
    const onSuccess = (data) => {
        console.log(data)
        dispatch(showPopup({type:"success",message:"Booking confirmed"}));
    }
    const onFailure = () => {
        dispatch(showPopup({type:"error",message:"Something went wrong, please check logs!"}));

    }
    await apiCall("/booking", "POST", data, undefined, onSuccess, onFailure);
}

export const getBookingByUserId = (userid) => async (dispatch) => {
    const onSuccess = (data) => {
        dispatch(setBookings({data}));
    }
    const onFailure = () => {

    }
    
    let params=paramBuilder(userid);
    await apiCall(`/booking?${params}`, "GET", undefined, undefined, onSuccess, onFailure);
}

export const paramBuilder = (params) => {
    return Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
};