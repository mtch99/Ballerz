import { createSlice } from "@reduxjs/toolkit";
import PlaceMapReducers from "./reducers"
import { RootState } from "../../../../store";
import { IPlaceMapState } from "../../types";

const initialState: IPlaceMapState = {}

export const PlaceMapSlice = createSlice({
    name: 'groupChat',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      ...PlaceMapReducers
    }
})

export const {NEW_PLACEMAP, NEW_PLACEPROFILE} = PlaceMapSlice.actions

export const selectPlaceMapState = (state: RootState) => state.placeMap

export default PlaceMapSlice.reducer