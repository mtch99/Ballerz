import React from "react";
import { IAppController } from "./interface";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createFeedModel } from "../app/features/feed/adapter";
import { FeedController } from "./feed";
import { createGroupChatModel } from "../app/features/groupChat/adapter";
import GroupChatController from "./groupChat";
import { createUserProfileModel } from "../app/features/userProfile/adapter";
import UserProfileController from "./userProfile";
import { IFeedState } from "../app/features/feed/slice/interface";
import { selectFeed } from "../app/features/feed/slice";
import IFeedModel from "../domain/use-cases/feed/interface";
import { IGroupChatListState } from "../app/features/groupChat/types";
import { selectgroupChatModelState } from "../app/features/groupChat/groupChatList/slice";
import { selectUserProfileListState } from "../app/features/userProfile/userProfileList/slice";
import IGroupChatMapState from "../app/features/groupChat/groupChatMap/slice/interface";
import { selectGroupChatMapState } from "../app/features/groupChat/groupChatMap/slice";
import IFeedController from "./feed/interface";
import IGroupChatController from "./groupChat/interface";
import { IUserProfileController } from "./userProfile/interface";
import { IUserProfileListState } from "../app/features/userProfile/userProfileList/slice/interface";
import { IPlaceListState, IPlaceMapState } from "../app/features/place/types";
import { IPlaceModel, createPlaceModel } from "../app/features/place/adapter";
import { selectPlaceListState } from "../app/features/place/placeList/slice";
import { selectPlaceMapState } from "../app/features/place/placeMap/slice";
import PlaceController from "./place";
import IPlaceController from "./place/interface";
import { IUserProfileMapState } from "../app/features/userProfile/types";
import { selectUserProfileMapState } from "../app/features/userProfile/userProfileMap/slice";







export interface IAppContext extends IAppController{
    feedState: IFeedState
    groupChatListState: IGroupChatListState
    groupChatMapState: IGroupChatMapState
    userProfileListState: IUserProfileListState
    userProfileMapState: IUserProfileMapState
    placeListState: IPlaceListState
    placeMapState: IPlaceMapState
}


export const AppContext = React.createContext<IAppContext>({
    feedController: {} as IFeedController,
    groupChatController: {} as IGroupChatController,
    userProfileController: {} as IUserProfileController,
    placeController: {} as IPlaceController,
    feedState: {items: []},
    groupChatListState: {items: []},
    groupChatMapState: {},
    userProfileListState: {items: []},
    placeListState: {items: []},
    placeMapState: {},
    userProfileMapState: {}
});


interface IProps {
    navigation: any
    children: JSX.Element
}

export default function AppProvider (props: IProps) {
    const selector = useAppSelector;
    const dispatch = useAppDispatch();
    const modelInput = {
        selectorFunc: selector,
        dispatchFunc: dispatch
    }

    const feedModel: IFeedModel = createFeedModel(modelInput)
    const feedState: IFeedState = selector(selectFeed)
    const feedController = new FeedController(feedModel, feedState)


    const groupChatModel = createGroupChatModel(modelInput)
    const groupChatListState: IGroupChatListState = selector(selectgroupChatModelState)
    const groupChatMapState: IGroupChatMapState = selector(selectGroupChatMapState)
    const groupChatController = new GroupChatController(groupChatModel, groupChatListState, groupChatMapState)

    const userProfileModel = createUserProfileModel(modelInput)
    const userProfileListState = selector(selectUserProfileListState)
    const userProfileMapState = selector(selectUserProfileMapState)
    const userProfileController = new UserProfileController(userProfileModel, userProfileListState)


    const placeModel: IPlaceModel = createPlaceModel(modelInput)
    const placeListState: IPlaceListState = selector(selectPlaceListState)
    const placeMapState: IPlaceMapState = selector(selectPlaceMapState)
    const placeController: IPlaceController = new PlaceController(placeModel)

    const controller: IAppController = {
        feedController,
        groupChatController,
        userProfileController,
        placeController
    }


    const _contextValue: IAppContext = {
        ...controller,
        groupChatListState,
        groupChatMapState,
        userProfileListState,
        feedState,
        placeListState,
        placeMapState,
        userProfileMapState
    }
    


    return (
        <AppContext.Provider
            value={_contextValue}
        >
            {props.children}
        </AppContext.Provider>
    )

}


