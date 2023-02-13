import React from "react";
import { useAppSelector } from "../../../hooks";
import { IFeed, IFeedItem } from "../../../../use-cases/feed/types";
import { CHECK_IN, NEW_FEED, selectFeed } from "../slice";
import { IFeedItemState, IFeedState } from "../slice/interface";
import { useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { ICheckInActionPayload, INewFeedActionPayload } from "../slice/actions";
import { feedReducers } from "../slice/reducers";
import IFeedModel, { ICheckinEventPayload } from "../../../../use-cases/feed/interface";



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
        }
    }
}


class FeedModelAdapter {
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
}



