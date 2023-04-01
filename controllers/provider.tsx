import React from "react";
import { IAppController, IAppControllerEventListener } from "./interface";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createFeedModel } from "../app/features/feed/model";
import { FeedController } from "./feed";
import { createGroupChatModel } from "../app/features/groupChat/model";
import GroupChatController from "./groupChat";
import { createUserProfileModel } from "../app/features/userProfile/model";
import UserProfileController from "./userProfile";
import { IFeedState } from "../app/features/feed/slice/interface";
import { selectFeed } from "../app/features/feed/slice";
import IFeedModel from "../domain/use-cases/feed/interface";
import { IGroupChatListState } from "../app/features/groupChat/types";
import { selectgroupChatListState } from "../app/features/groupChat/groupChatList/slice";
import { selectUserProfileListState } from "../app/features/userProfile/userProfileList/slice";
import IGroupChatMapState from "../app/features/groupChat/groupChatMap/slice/interface";
import { selectGroupChatMapState } from "../app/features/groupChat/groupChatMap/slice";
import IFeedController from "./feed/interface";
import IGroupChatController from "./groupChat/interface";
import { IUserProfileController } from "./userProfile/interface";
import { IUserProfileListState } from "../app/features/userProfile/userProfileList/slice/interface";
import { IPlaceListState, IPlaceMapState } from "../app/features/place/types";
import { IPlaceModel, createPlaceModel } from "../app/features/place/model";
import { selectPlaceListState } from "../app/features/place/placeList/slice";
import { selectPlaceMapState } from "../app/features/place/placeMap/slice";
import PlaceController from "./place";
import IPlaceController from "./place/interface";
import { IUserProfileMapState } from "../app/features/userProfile/types";
import { selectUserProfileMapState } from "../app/features/userProfile/userProfileMap/slice";
import { IAuthModel, createAuthModel } from "../app/features/Auth/model";
import { IAuthUCIEventListener } from "../domain/use-cases/auth/interface";
import AuthController from "./auth";
import IAuthController from "./auth/interface";
import { AuthState, selectAuth } from "../app/features/Auth/slice";
import * as SplashScreen from 'expo-splash-screen'




export interface IAppContext extends IAppController{
    feedState: IFeedState
    groupChatListState: IGroupChatListState
    groupChatMapState: IGroupChatMapState
    userProfileListState: IUserProfileListState
    userProfileMapState: IUserProfileMapState
    placeListState: IPlaceListState
    placeMapState: IPlaceMapState,
    authState: AuthState
}


export const AppContext = React.createContext<IAppContext>({
    authController: {} as AuthController,
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
    userProfileMapState: {},
    authState: {
        user: undefined,
        lastSignupInput: {
            email: ""
        },
        lastSigninInput: {
            email: "",
            password: ""
        },
        isDataPrepared: false
    },
    appControllerEventListener: {} as IAppControllerEventListener,
    prepareData: () => {}
});


interface IProps {
    navigation?: any
    children?: JSX.Element
}

export function AppProvider (props: IProps) {
    const selector = useAppSelector;
    const dispatch = useAppDispatch();
    const modelInput = {
        selectorFunc: selector,
        dispatchFunc: dispatch
    }

    const [isDataPrepared, setIsDataPrepared] = React.useState(false)

    const authModel: IAuthModel = createAuthModel(modelInput)
    const authState: AuthState = selector(selectAuth)
    const authController: IAuthController = new AuthController(authModel)

    const feedModel: IFeedModel = createFeedModel(modelInput)
    const feedState: IFeedState = selector(selectFeed)
    const feedController = new FeedController(feedModel, feedState)


    const groupChatModel = createGroupChatModel(modelInput)
    const groupChatListState: IGroupChatListState = selector(selectgroupChatListState)
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

    
    
    
    const prepareData = async() => {
        const isUserSignedIn = await authController.signinLastUser()
        if(isUserSignedIn){
            await userProfileController.getMyProfile(isUserSignedIn.user?.email)
        }
        authModel.onDataPreparedEvent()
        await SplashScreen.hideAsync().then(result => {
            if(result){console.log(`Splashscreen hidden`)}
        })
    }
    
    const controller: IAppController = {
        feedController,
        groupChatController,
        userProfileController,
        placeController,
        authController,
        prepareData,
        appControllerEventListener: authModel
    }

    const _contextValue: IAppContext = {
        ...controller,
        groupChatListState,
        groupChatMapState,
        userProfileListState,
        authState,
        feedState,
        placeListState,
        placeMapState,
        userProfileMapState,
    }

    // React.useEffect(() => {
    //     if(!isDataPrepared){
    //         prepareData().then(() => {setIsDataPrepared(true)});
    //     }
    // }, [])


    return (
        <AppContext.Provider
            value={_contextValue}
        >
            {props.children}
        </AppContext.Provider>
    )

}


export const MemoizedAppProvider = React.memo(AppProvider)

export default MemoizedAppProvider;


