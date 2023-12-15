import { createSlice } from "@reduxjs/toolkit"
const timeSlice = createSlice({
    name: "time",
    initialState: {
        sunset: "",
        sunrise: ""
    },
    reducers: {
        setSunset: (state, action) => {
            console.log(action.payload)
            state.sunset = action.payload

        },
        setSunrise: (state, action) => {
            console.log(action.payload)
            state.sunrise = action.payload

        }

    }
})

export const { setSunset, setSunrise } = timeSlice.actions;

export default timeSlice.reducer;