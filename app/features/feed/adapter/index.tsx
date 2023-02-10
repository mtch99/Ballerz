import React from "react";
import IFeedModel from "./interface";
import { DispatchFunc, useAppDispatch, useAppSelector } from "../../../hooks";
import { IFeed, IFeedItem } from "../../../../use-cases/feed/types";
import { NEW_FEED, selectFeed } from "../slice";
import { IFeedItemState, IFeedState } from "../slice/interface";
import { useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { INewFeedActionPayload } from "../slice/actions";
import { feedReducers } from "../slice/reducers";



interface IFeedModelInput {
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector
}


export const createFeedModel = (input: IFeedModelInput): IFeedModel => {
    
    return {
        newFeedEventHandler(payload: IFeed): void {
            const newFeedActionPayload: INewFeedActionPayload = FeedModelAdapter.parseNewFeedEventPayload(payload)
            input.dispatchFunc(NEW_FEED(newFeedActionPayload))
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
}



