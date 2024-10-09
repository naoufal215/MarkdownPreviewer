import {configureStore} from "@reduxjs/toolkit";
import textProperties from "./features/textProperties";
import settingsProperties from "./features/settingsProperties";

export const store = configureStore({
    reducer : {
        textProperties,
        settingsProperties
    }
});