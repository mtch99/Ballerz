import { IUserProfileDataState } from "./../../../types";
import { PayloadAction } from "@reduxjs/toolkit";
import { IUserProfileListState } from "./interface";
import { INewSentFriendshipRequestActionPayload, INewUserProfileListActionPayload } from "./actions";


export enum UserProfileActionType{
    NEW_USERPROFILELIST="NEW_USERPROFILELIST",
    NEW_SENT_FRIENDSHIPREQUEST="NEW_SENT_FRIENDSHIPREQUEST"
}


type IUserProfileListReducer<PayloadType> = (state: IUserProfileListState, action: PayloadAction<PayloadType>) => IUserProfileListState


const newUserProfileListReducer: IUserProfileListReducer<INewUserProfileListActionPayload> = (state, action) => {
    const items = action.payload.items
    const newItems: IUserProfileDataState[] = []
    const newUserProfileListState: IUserProfileListState = {items: [...items]}
    const newState = {
        ...newUserProfileListState
    }

    return newState
}


const newSentFriendshipRequestReducer: IUserProfileListReducer<INewSentFriendshipRequestActionPayload> = (state, action) => {
    const newItems: IUserProfileDataState[] = []
    state.items.forEach((item) => {
        if(item.id == action.payload.receiverProfileID){
            newItems.push({...item, friendshipRequestSent: true})
        }else {
            newItems.push(item)
        }
    })

    return {
        ...state,
        items: newItems
    }
}


const userProfileListReducers = {
    NEW_USERPROFILELIST: newUserProfileListReducer,
    NEW_SENTFRIENDSHIPREQUEST: newSentFriendshipRequestReducer
}

export default userProfileListReducers