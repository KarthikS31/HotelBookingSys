import { createSlice } from "@reduxjs/toolkit";

const roomsSlice= createSlice({
    name:"rooms",
    initialState:{data:[]},
    reducers:{
        getAllRooms(state,action){
            state.data=action.payload;
        }
    }
})

export default roomsSlice.reducer;

export let {getAllRooms}=roomsSlice.actions;