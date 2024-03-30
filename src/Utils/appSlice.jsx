import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        ismenuOpen: true,
    },
    reducers: {
        togglemenu: (state) => {
            state.ismenuOpen = !state.ismenuOpen;
        },
        closemenu:(state)=>{
            state.ismenuOpen= false

        }
    }
});

export const { togglemenu , closemenu} = appSlice.actions;
export default appSlice.reducer;
