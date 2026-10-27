import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: "popup",
    initialState: {
        isOpen: false,
        type: "success",
        message: ""
    },
    reducers: {
        showPopup: (state, action) => {
            state.isOpen = true;
            state.type = action.payload.type;
            state.message = action.payload.message;
        },
        hidePopup: (state) => {
            state.isOpen = false;
            state.message = "";
        }
    }
});

export const { showPopup, hidePopup } = popupSlice.actions;
export default popupSlice.reducer;