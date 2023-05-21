import { createSlice } from "@reduxjs/toolkit";
import PlaceListReducers from "./reducers"
import { RootState } from "../../../../store";
import { IPlaceListState } from "../../types";

const initialState: IPlaceListState = {items: []}

export const PlaceListSlice = createSlice({
    name: 'groupChat',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      ...PlaceListReducers
    }
})

export const {NEW_PLACELIST} = PlaceListSlice.actions

export const selectPlaceListState = (state: RootState) => state.placeList

export default PlaceListSlice.reducer