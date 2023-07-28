import { RootState } from "../../../store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICity } from "../../../../domain/use-cases/types";

export interface ICityState extends ICity{}
export type ICityListState = {items: ICityState[]};
const initialState: ICityListState = {items:[]};

export const cityListSlice = createSlice({
    name: "city", 
    initialState,
    reducers: {
        setCityList: (state, action: PayloadAction<ICity[]>) => {
            return {
                ...state,
                items: action.payload
            }
        }
    }
})

export const {setCityList} = cityListSlice.actions
export const selectCityListState = (state: RootState) => state.cityList

export default cityListSlice.reducer