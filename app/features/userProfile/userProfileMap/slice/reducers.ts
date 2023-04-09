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

    const newState: IUserProfileMapState = {
        ...state,
        [UserProfileId]: action.payload,
    }
    // console.error(`New user profile map received: ${JSON.stringify(newState)}`)

    return newState
}


const newUserProfileMapReducer: IUserProfileMapStateReducer<INewUserProfileMapActionPayload> = (state, action) => {
    const result: IUserProfileMapState = {
        ...state,
        ...action.payload
    }
    // console.log(`New user profile map received: ${JSON.stringify(result)}`)
    return result
}


const UserProfileMapReducers = {
    NEW_USERPROFILE: newUserProfileReducer,
    NEW_USERPROFILEMAP: newUserProfileMapReducer,
}

export default UserProfileMapReducers
