import React from "react";
import { IAppController, IAppControllerEventListener } from "./interface";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createFeedModel } from "../app/features/feed/model";
import feedController from "./feed";
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
import { INotificationsObserver, INotificationsUseCase } from "../domain/use-cases/notifications/interface";
import { IFriendShipRequestNotification } from "../domain/use-cases/types";
import NotificationsUseCase from "../domain/use-cases/notifications";
import { INotificationController } from "./notification/interface";
import NotificationController from "./notification";
import { NotificationListState } from "../app/features/notifications/slice/interface";
import { createNotificationModel } from "../app/features/notifications/model";
import { selectNotificationList } from "../app/features/notifications/slice";
import userProfileController from "./userProfile";
import placeController from "./place";
import groupChatController from "./groupChat";
import authController from "./auth";




export interface IAppContext extends IAppController{
    feedState: IFeedState
    groupChatListState: IGroupChatListState
    groupChatMapState: IGroupChatMapState
    userProfileListState: IUserProfileListState
    userProfileMapState: IUserProfileMapState
    placeListState: IPlaceListState
    placeMapState: IPlaceMapState,
    authState: AuthState,
    notificationListState: NotificationListState
}


export const AppContext = React.createContext<IAppContext>({
    authController: {} as IAuthController,
    feedController: {} as IFeedController,
    groupChatController: {} as IGroupChatController,
    userProfileController: {} as IUserProfileController,
    placeController: {} as IPlaceController,
    notificationController: {} as INotificationController,
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
    notificationListState: [],
    prepareData: () => {}
});


interface IProps {
    navigation?: any
    children?: JSX.Element
}

export default function AppProvider (props: IProps) {
    const selector = useAppSelector;
    const dispatch = useAppDispatch();
    const modelInput = {
        selectorFunc: selector,
        dispatchFunc: dispatch
    }

    const [isDataPrepared, setIsDataPrepared] = React.useState(false)

    const authModel: IAuthModel = createAuthModel(modelInput)
    const authState: AuthState = selector(selectAuth)

    const feedModel: IFeedModel = createFeedModel(modelInput)
    const feedState: IFeedState = selector(selectFeed)



    const groupChatModel = createGroupChatModel(modelInput)
    const groupChatListState: IGroupChatListState = selector(selectgroupChatListState)
    const groupChatMapState: IGroupChatMapState = selector(selectGroupChatMapState)
    const userProfileModel = createUserProfileModel(modelInput)
    const userProfileListState = selector(selectUserProfileListState)
    const userProfileMapState = selector(selectUserProfileMapState)



    const placeModel: IPlaceModel = createPlaceModel(modelInput)
    const placeListState: IPlaceListState = selector(selectPlaceListState)
    const placeMapState: IPlaceMapState = selector(selectPlaceMapState)

    const notificationModel = createNotificationModel(modelInput)
    const notificationListState: NotificationListState = selector(selectNotificationList)

    const prepareData = async() => {
        const isUserSignedIn = await authController.signinLastUser()
        if(isUserSignedIn){
            const userProfile = await userProfileController.getMyProfile(isUserSignedIn.user?.email)
            if(userProfile){
                notificationController.subscribeToMyNotifications(userProfile.email)
            }
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
        notificationController,
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
        notificationListState
    }

    React.useEffect(() => {
        authController.createUseCase(authModel)
        userProfileController.createUseCase(userProfileModel)
        notificationController.createUseCase(notificationModel)  
        placeController.createUseCase(placeModel)
        groupChatController.createUseCase(groupChatModel)
        feedController.createUseCase(feedModel)
    }, [])


    return (
        <AppContext.Provider
            value={_contextValue}
        >
            {props.children}
        </AppContext.Provider>
    )

}


export const MemoizedAppProvider = React.memo(AppProvider)

// export MemoizedAppProvider;



const notificationController = new NotificationController()


