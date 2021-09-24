import { configureStore } from "@reduxjs/toolkit";
import resrvationReducer from "../app/reservationSlice";

export const store = configureStore({
    reducer : {
        reservations: resrvationReducer
    }
})

export type RootState =  ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;