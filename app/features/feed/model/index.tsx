import React from "react";
import { useAppSelector } from "../../../hooks";
import { IFeed, IFeedItem, IUserProfile, IUserProfileData } from "../../../../domain/use-cases/types";
import { ADD_ITEM, CHECK_IN, COMMENT, NEW_FEED, selectFeed } from "../slice";
import { IFeedItemState, IFeedState} from "../slice/interface";
import { useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { IAddItemActionPayload, ICheckInActionPayload, ICommentActionPayload, INewFeedActionPayload } from "../slice/actions";
import { feedReducers } from "../slice/reducers";
import IFeedModel, { ICheckinEventPayload, ICommentEventPayload } from "../../../../domain/use-cases/feed/interface";



interface IFeedModelInput {
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector
}


export const createFeedModel = (input: IFeedModelInput): IFeedModel => {
    
    return {
        newFeedEventHandler(payload: IFeed): void {
            const newFeedActionPayload: INewFeedActionPayload = FeedModelAdapter.parseNewFeedEventPayload(payload)
            input.dispatchFunc(NEW_FEED(newFeedActionPayload))
        },
        checkInEventHandler(payload: ICheckinEventPayload): void{
            const checkInActionPayload: ICheckInActionPayload = FeedModelAdapter.parseCheckinEventPayload(payload)
            input.dispatchFunc(CHECK_IN(checkInActionPayload))
        },
        commentEventHandler(payload) {
            const commentActionPayload: ICommentActionPayload = FeedModelAdapter.parseCommentEventPayload(payload)
            input.dispatchFunc(COMMENT(commentActionPayload))
        },
        newGameEventHandler(payload) {
            const addItemActionPayload: IAddItemActionPayload = FeedModelAdapter.parseFeedItem(payload)
            input.dispatchFunc(ADD_ITEM(addItemActionPayload))
        },
    }
}


export class FeedModelAdapter {
    static parseNewFeedEventPayload(payload: IFeed): INewFeedActionPayload {
        const feed: IFeedItemState[] = []
        payload.forEach((feedItem) => {
            feed.push(this.parseFeedItem(feedItem))
        })

        return {items: feed}
    } 

    static parseCheckinEventPayload(payload: ICheckinEventPayload): ICheckInActionPayload {
        return {
            keyToUpdate: payload.id,
            userProfileData: payload.userProfile
        }
    }

    static parseCommentEventPayload(payload: ICommentEventPayload): ICommentActionPayload {
        return {
            itemId: payload.feedItemId,
            author: payload.comment.author,
            text: payload.comment.text
        }
    }

    static parseUserProfileData(userProfile: IUserProfile): IUserProfileData {
        return {
            ...userProfile
        }
    }

    static parseFeedItem(feedItem: IFeedItem): IFeedItemState {
        return {
            ...feedItem,
            startingTime: feedItem.startingTime.toString(),
            endingTime: feedItem.endingTime.toString()
        }
    }
}



