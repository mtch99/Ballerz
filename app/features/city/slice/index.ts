import { RootState } from "../../../store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICity } from "../../../../domain/use-cases/types";


export type ICityListState = {items: ICity[]};
const initialState: ICityListState = {items:[]};

export const citySlice = createSlice({
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

export const {setCityList} = citySlice.actions
export const selectCityList = (state: RootState) => state.cityList

export default citySlice.reducer