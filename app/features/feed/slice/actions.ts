import { IFeedItemState, IFeedState, IUserProfileData } from "./interface";
import { PayloadAction, createAction } from "@reduxjs/toolkit";
import { IFeedItem, IUserProfile } from "../../../../use-cases/types";


enum FeedActionType {
	ADD_ITEM='ADD_ITEM',
	REMOVE_ITEM="REMOVE_ITEM",
	CHECK_IN="CHECK_IN",
	NEW_FEED = 'NEW_FEED',
}
export type FeedActionString = keyof typeof FeedActionType

export interface IAddItemActionPayload extends IFeedItemState{}
export interface IAddItemAction extends PayloadAction<IAddItemActionPayload, 'ADD_ITEM'>{}


export interface IRemoveItemActionPayload {
    id: IFeedItem['id']
}
export interface IRemoveItemAction extends PayloadAction<IRemoveItemActionPayload>{}


export interface ICheckInActionPayload {
    keyToUpdate: IFeedItem['id']
    userProfileData: IUserProfileData
}
export interface ICheckInAction extends PayloadAction<ICheckInActionPayload>{}


export interface ICommentActionPayload {
	itemId: IFeedItem['id']
	author: IUserProfileData
	text: string
}
export interface ICommentAction extends PayloadAction<ICommentActionPayload>{
}


export interface INewFeedActionPayload extends IFeedState{}