import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name: "popup",
    initialState: {
        data:[]
    },
    reducers: {
        setBookings: (state, action) => {
            state.data=action.payload.data
        }
    }
});

export const { setBookings } = bookingSlice.actions;
export default bookingSlice.reducer;