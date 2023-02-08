import React from "react"
import { IFeedState } from "../../app/features/feed/slice/interface"
import IFeedController from "../../controllers/feed/interface"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { NEW_FEED, selectFeed } from "../../app/features/feed/slice"
import { FeedModel, createFeedModel } from "../../app/features/feed/adapter"
import { FeedController } from "../../controllers/feed"


export interface IFeedContext {
    controller: IFeedController
    feedState: IFeedState
}

export const FeedContext = React.createContext<IFeedContext>({
    controller: {} as IFeedController,
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
export default function FeedProvider (props: IProps) {

    const selector = useAppSelector;
    const dispatch = useAppDispatch();

    const feedModel = createFeedModel({
        dispatchFunc: dispatch,
        selectorFunc: selector
    })

    const feedState: IFeedState = selector(selectFeed)
    const controller = new FeedController(feedModel)
    const _contextValue: IFeedContext = {
        controller,
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







