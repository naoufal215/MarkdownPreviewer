import { createSlice } from "@reduxjs/toolkit";

const initialState = [

    {
        inputNumber: 1,
        name: "Max length",
        value : 8000,
        minMax:[0,8000],
        modifiable: false, 
        type: "range"      
    },
    {
        inputNumber: 2,
        name: "Font size",
        value: 6,
        minMax: [1, 6],
        modifiable: true, 
        type: "range"
    },
    {
        inputNumber: 3,
        name: "Text color",
        value: "#000",
        modifiable: true,         
        type: "color"
    }
]

const settingsProperties = createSlice(
    {
        name:"settingsProperties",
        initialState,
        reducers:{
            updateSettings : (state, action) =>{
                state.find(el=>el.inputNumber === action.payload.inputNumber)
                     .value = action.payload.value;
                
            }
        }
    }
);

export const {updateSettings} = settingsProperties.actions;

export default settingsProperties.reducer;