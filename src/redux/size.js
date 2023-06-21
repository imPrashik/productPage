import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../storage/localStorage";

const persistedState = loadState();

export const sizeSlice = createSlice({
    name: "size",
    initialState: persistedState,
    reducers: {
        setSize: (state, action) => { state.size = action.payload; saveState(state); }
    }
});
export const { setSize } = sizeSlice.actions;
export default sizeSlice.reducer;