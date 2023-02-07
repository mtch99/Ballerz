import React from "react";
import IFeedModel from "./interface";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { IFeed } from "../../../../use-cases/feed/types";
import { NEW_FEED, selectFeed } from "../slice";
import { IFeedState } from "../slice/interface";

export interface IFeedModelContext {
    feedModel: IFeedModel
    feedState: IFeedState
}

export const FeedContext = React.createContext<IFeedModelContext>({
    feedModel: {
        newFeedEventHandler: (payload: IFeed): void => {
            console.error("Using an empty feed model")
        }
    },
    feedState: {items: []}
})


interface IProps {
    navigation: any
    children: JSX.Element
}



/**
 * Provide a FeedModelInstance and the Feed Slice state
 * @param props
 * @returns 
 */
export default function FeedModelProvider (props: IProps) {

    const dispatch = useAppDispatch()
    const selector = useAppSelector;

    const newFeedEventHandler = (payload: IFeed): void => {
        dispatch(NEW_FEED)
    }

    const feedModel :  IFeedModel= {
        newFeedEventHandler
    }

    
    const feedState: IFeedState = selector(selectFeed)
    
    
    const _contextValue: IFeedModelContext = {
        feedModel,
        feedState
    }


    return (
        <FeedContext.Provider
            value={_contextValue}
        >
            {props.children}
        </FeedContext.Provider>
    )
}




