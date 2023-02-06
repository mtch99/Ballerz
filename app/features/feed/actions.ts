import { PayloadAction, createAction } from "@reduxjs/toolkit";
import { IFeedItem, IUserProfile } from "./../../../use-cases/feed/types";


const addItemAction = createAction<IAddItemActionPayload>('ADD_ITEM')
export interface IAddItemActionPayload extends IFeedItem{}
export interface IAddItemAction extends PayloadAction<IAddItemActionPayload, 'ADD_ITEM'>{}


const removeItemAction = createAction<IRemoveItemActionPayload>('REMOVE_ITEM')
export interface IRemoveItemActionPayload {
    id: IFeedItem['id']
}
export interface IRemoveItemAction extends PayloadAction<IRemoveItemActionPayload>{}


const checkInAction = createAction<IRemoveItemActionPayload>('CHECK_IN')
export interface ICheckInActionPayload {
    keyToUpdate: IFeedItem['id']
    userProfileData: {
        id: IUserProfile['id']
        username: IUserProfile['username']
    }
}
export interface ICheckInAction extends PayloadAction<ICheckInActionPayload>{}


export const feedActions = {
    'ADD_ITEM': addItemAction,
    'REMOVE_ITEM': removeItemAction,
    'CHECK_IN': checkInAction
}