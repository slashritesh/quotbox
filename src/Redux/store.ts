import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./slices/quoteSlice";
import modalReducers from './slices/modalSlice'


export const store = configureStore({
    reducer:{
        quote : quoteReducer,
        modal : modalReducers
    }
})


export type Rootstate = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

