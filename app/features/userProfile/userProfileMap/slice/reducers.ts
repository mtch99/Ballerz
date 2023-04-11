import { PayloadAction } from "@reduxjs/toolkit";
import { IUserProfileMapState } from "../../types";
import { INewUserProfileProfileActionPayload, INewUserProfileMapActionPayload, INewSentFriendshipRequestActionPayload } from "./actions";

export enum UserProfileMapActionType {
    NEW_USERPROFILE="NEW_USERPROFILE",
    NEW_UserProfileMAP="NEW_USERPROFILEMAP",
    NEW_SENT_FRIENDSHIPREQUEST="NEW_SENT_FRIENDSHIPREQUEST",
}




type IUserProfileMapStateReducer<PayloadType> = (state: IUserProfileMapState, action: PayloadAction<PayloadType>) => IUserProfileMapState


const newUserProfileReducer: IUserProfileMapStateReducer<INewUserProfileProfileActionPayload> = (state, action) => {
    
    const UserProfileID = action.payload.id

    const newState: IUserProfileMapState = {
        ...state,
        [UserProfileID]: {
            ...action.payload,
            friendshipRequestSent: state[UserProfileID]?.friendshipRequestSent
        },
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

const newSentFriendRequestReducer: IUserProfileMapStateReducer<INewSentFriendshipRequestActionPayload> = (state, action) => {
    const result: IUserProfileMapState = {
      ...state,
      [action.payload.receiverProfileID]: {
        ...state[action.payload.receiverProfileID],
        friendshipRequestSent: true
      }
    }

    return result
}


const UserProfileMapReducers = {
    NEW_USERPROFILE: newUserProfileReducer,
    NEW_USERPROFILEMAP: newUserProfileMapReducer,
    NEW_SENT_FRIENDSHIPREQUEST: newSentFriendRequestReducer,
}

export default UserProfileMapReducers
