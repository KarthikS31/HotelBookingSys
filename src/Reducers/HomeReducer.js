import { createSlice } from "@reduxjs/toolkit";


const homeSlice = createSlice({
    name: "home",
    initialState: {
        filters: {
            guests: 1,
            checkin: "",
            checkout: "",
            roomType: ""
        }
    },
    reducers: {
        setRoomFilters: (state, action) => {
            state.filters = action.payload;
        }
    }
})

export default homeSlice.reducer;

export let {setRoomFilters}= homeSlice.actions;