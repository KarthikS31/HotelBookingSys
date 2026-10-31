import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from '../Reducers/RoomReducer';
import homeReducer from '../Reducers/HomeReducer';
import popupReducer from '../Reducers/PopupReducer';
import bookingReducer from '../Reducers/BookingsReducer';
import authReducer from '../Reducers/AuthReducer';

export const store = configureStore({
    reducer: {
        rooms: roomsReducer,
        home: homeReducer,
        popup: popupReducer,
        bookings: bookingReducer,
        auth: authReducer,
    }
})
