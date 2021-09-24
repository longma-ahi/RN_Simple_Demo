import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// define a type
interface ReservationState {
    value: string[]
}

// let our initialState confort to the type defined upon
const initialState: ReservationState = {
    value: []
}

// createSlice is the helper function which is automaticlly create the action creator and 
// connect it with the reducer and state
export const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        // state is the state in the store which means the only source of true for the data
        // action is the dispatched and get catched in here, we usually need to get the payload part
        // out of it and then let reducer updating the state
        addReservation: (state: ReservationState, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        removeReservation: (state: ReservationState, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1)
        }
    }
})

// export the addReservation ACTION, so we can use it
export const { addReservation, removeReservation } = reservationSlice.actions

// export our created reservation reducer and able to pass it into the store
// root reducer
export default reservationSlice.reducer