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
        },
        clearRoomFilters: (state) => {
            state.filters = {
                guests: 1,
                checkin: "",
                checkout: "",
                roomType: ""
            }
        }

    }
})

export default homeSlice.reducer;

export let { setRoomFilters, clearRoomFilters } = homeSlice.actions;