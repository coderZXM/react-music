import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './reducer/homeSlice'
/**建立公共redux */
export const store = configureStore({
    reducer:{
        home:homeReducer
    },
})