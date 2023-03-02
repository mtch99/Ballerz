import { PayloadAction } from "@reduxjs/toolkit";
import { IUserProfileListState } from "./interface";
import { INewUserProfileListActionPayload } from "./actions";


export enum UserProfileActionType{
    NEW_USERPROFILELIST="NEW_USERPROFILELIST"
}


type IUserProfileListReducer<PayloadType> = (state: IUserProfileListState, action: PayloadAction<PayloadType>) => IUserProfileListState


const newUserProfileListReducer: IUserProfileListReducer<INewUserProfileListActionPayload> = (state, action) => {
    const items = action.payload.items
    const newUserProfileList: IUserProfileListState = {items: [...items]}
    const newState = {
        ...newUserProfileList
    }

    return newState
}


const userProfileListReducers = {
    NEW_USERPROFILELIST: newUserProfileListReducer
}

export default userProfileListReducers