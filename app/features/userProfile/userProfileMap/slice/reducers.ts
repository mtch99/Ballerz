import { PayloadAction } from "@reduxjs/toolkit";
import { IUserProfileMapState } from "../../types";
import { INewUserProfileProfileActionPayload, INewUserProfileMapActionPayload } from "./actions";

export enum UserProfileMapActionType {
    NEW_USERPROFILE="NEW_USERPROFILE",
    NEW_UserProfileMAP="NEW_USERPROFILEMAP"
}




type IUserProfileMapStateReducer<PayloadType> = (state: IUserProfileMapState, action: PayloadAction<PayloadType>) => IUserProfileMapState


const newUserProfileReducer: IUserProfileMapStateReducer<INewUserProfileProfileActionPayload> = (state, action) => {
    
    const UserProfileId = action.payload.id

    
    const newState = {
        ...state,
        [UserProfileId]: action.payload
    }

    return newState
}


const newUserProfileMapReducer: IUserProfileMapStateReducer<INewUserProfileMapActionPayload> = (state, action) => {
    return {
        ...state,
        ...action.payload
    }
}


const UserProfileMapReducers = {
    NEW_USERPROFILE: newUserProfileReducer,
    NEW_USERPROFILEMAP: newUserProfileMapReducer,
}

export default UserProfileMapReducers
