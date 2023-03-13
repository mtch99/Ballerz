import { PayloadAction } from "@reduxjs/toolkit";
import {INewPlaceMapActionPayload, INewPlaceProfileActionPayload} from "./actions";
import { IPlaceMapState } from "../../types";

export enum PlaceMapActionType {
    NEW_PLACEPROFILE="NEW_PLACEPROFILE",
    NEW_PLACEMAP="NEW_PLACEMAP"
}




type IPlaceMapStateReducer<PayloadType> = (state: IPlaceMapState, action: PayloadAction<PayloadType>) => IPlaceMapState


const newPlaceProfileReducer: IPlaceMapStateReducer<INewPlaceProfileActionPayload> = (state, action) => {
    
    const placeId = action.payload.id

    
    const newState = {
        ...state,
        [placeId]: action.payload
    }

    return newState
}


const newPlaceMapReducer: IPlaceMapStateReducer<INewPlaceMapActionPayload> = (state, action) => {
    return {
        ...state,
        ...action.payload
    }
}


const PlaceMapReducers = {
    NEW_PLACEPROFILE: newPlaceProfileReducer,
    NEW_PLACEMAP: newPlaceMapReducer,
}

export default PlaceMapReducers
