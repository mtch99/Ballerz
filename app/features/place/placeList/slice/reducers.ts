import { PayloadAction } from "@reduxjs/toolkit";
import { INewPlaceListActionPayload} from "./actions";
import { IPlaceListState } from "../../types";

export enum PlaceMapActionType {
    NEW_PLACELIST="NEW_PLACELIST"
}




type IPlaceListStateReducer<PayloadType> = (state: IPlaceListState, action: PayloadAction<PayloadType>) => IPlaceListState


const newPlaceListReducer: IPlaceListStateReducer<INewPlaceListActionPayload> = (state, action) => {
    return {
        ...action.payload
    }
}


const PlaceListReducers = {
    NEW_PLACELIST: newPlaceListReducer
}

export default PlaceListReducers