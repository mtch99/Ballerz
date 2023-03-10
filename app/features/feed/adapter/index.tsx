import React from "react";
import { useAppSelector } from "../../../hooks";
import { IFeed, IFeedItem, IUserProfile, IUserProfileData } from "../../../../use-cases/types";
import { CHECK_IN, COMMENT, NEW_FEED, selectFeed } from "../slice";
import { IFeedItemState, IFeedState} from "../slice/interface";
import { useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { ICheckInActionPayload, ICommentActionPayload, INewFeedActionPayload } from "../slice/actions";
import { feedReducers } from "../slice/reducers";
import IFeedModel, { ICheckinEventPayload, ICommentEventPayload } from "../../../../use-cases/feed/interface";



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
    }
}


export class FeedModelAdapter {
    static parseNewFeedEventPayload(payload: IFeed): INewFeedActionPayload {
        const feed: IFeedItemState[] = []
        payload.forEach((feedItem) => {
            feed.push({
                ...feedItem,
                startingTime: feedItem.startingTime.toLocaleDateString(),
                endingTime: feedItem.endingTime.toLocaleDateString()
            })
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
}



