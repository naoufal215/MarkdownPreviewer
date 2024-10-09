import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text : ""
};

export const textProperties = createSlice({
    name : 'textProperties',
    initialState,
    reducers : {
            updateText : (state, action)=>{
                state.text = action.payload.text;
            }
    }
});

export const {updateText} = textProperties.actions;

export default textProperties.reducer;