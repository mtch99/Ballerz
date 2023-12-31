import React from "react";
import { Image } from "react-native";
import { Asset } from 'expo-asset';
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { IAppController, IAppControllerEventListener } from "./interface";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createFeedModel } from "../app/features/feed/model";
import feedController from "./feed";
import { createGroupChatModel } from "../app/features/groupChat/model";
import { createUserProfileModel } from "../app/features/userProfile/model";
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
import IPlaceController from "./place/interface";
import { IUserProfileMapState } from "../app/features/userProfile/types";
import { selectUserProfileMapState } from "../app/features/userProfile/userProfileMap/slice";
import { IAuthModel, createAuthModel } from "../app/features/Auth/model";
import IAuthController from "./auth/interface";
import { AuthState, selectAuth } from "../app/features/Auth/slice";
import * as SplashScreen from 'expo-splash-screen';
import { INotificationController } from "./notification/interface";
import { NotificationListState } from "../app/features/notifications/slice/interface";
import { createNotificationModel } from "../app/features/notifications/model";
import { selectNotificationList } from "../app/features/notifications/slice";


import userProfileController from "./userProfile";
import placeController from "./place";
import groupChatController from "./groupChat";
import authController from "./auth";
import notificationController from "./notification";
import { ICityListState, selectCityListState } from "../app/features/city/slice";
import { createCityModel } from "../app/features/city/model";
import cityController from "./city";
import ICityController from "./city/interface";




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
    cityListState: ICityListState
}


export const AppContext = React.createContext<IAppContext>({
    authController: authController,
    feedController: feedController,
    groupChatController: groupChatController,
    userProfileController: userProfileController,
    placeController: placeController,
    cityController: cityController,
    notificationController: notificationController,
    feedState: {items: [], myGamesList:[]},
    groupChatListState: {items: []},
    groupChatMapState: {},
    userProfileListState: {items: []},
    placeListState: {items: []},
    placeMapState: {},
    userProfileMapState: {} as IUserProfileMapState,
    authState: {
        user: undefined,
        lastSignupInput: {
            email: ""
        },
        lastSigninInput: {
            email: "",
            password: ""
        },
        isDataPrepared: false,
        isFirstLaunch: true
    },
    cityListState: {items: []},
    appControllerEventListener: {} as IAppControllerEventListener,
    notificationListState: {items: [], badge: undefined},

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

    // console.info("AppProvider rendering")


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

    const cityModel = createCityModel(modelInput)
    const cityListState: ICityListState = selector(selectCityListState)
    

    const prepareData = async() => {
        await Promise.all([
            authController.isFirstLaunch(),
            loadResources()
        ])
        const isUserSignedIn = await authController.signinLastUser()
        if(isUserSignedIn){
            const userProfile = await userProfileController.getMyProfile(isUserSignedIn.user?.email)
            if(userProfile){
                await Promise.all([
                    notificationController.initNotifications(userProfile.id),
                    notificationController.subscribeToMyNotifications(userProfile.id),
                    feedController.getMyGamesList(userProfile.id)
                ])
            }
        }
        authModel.onDataPreparedEvent()
        SplashScreen.hideAsync()
    }
    
    const controller: IAppController = {
        feedController,
        groupChatController,
        userProfileController,
        placeController,
        notificationController,
        authController,
        cityController,
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
        notificationListState,
        cityListState
    }

    React.useEffect(() => {
        authController.createUseCase(authModel)
        userProfileController.createUseCase(userProfileModel)
        notificationController.createUseCase(notificationModel)  
        placeController.createUseCase(placeModel)
        groupChatController.createUseCase(groupChatModel)
        feedController.createUseCase(feedModel)
        cityController.createUseCase(cityModel)


        const netWorkStateSubscription = NetInfo.addEventListener((state: NetInfoState) => {
            if(state.isConnected){
                console.log("Network State switched to connected")
                if(authState.profile){
                    const myUserProfileID = authState.profile.id
                    notificationController.updateNotificationList(myUserProfileID)
                }
            }
        })

        return(
            netWorkStateSubscription()
        )


    }, [authState.user])


    return (
        <AppContext.Provider
            value={_contextValue}
        >
            {props.children}
        </AppContext.Provider>
    )

}


export const MemoizedAppProvider = React.memo(AppProvider)






function getCacheImages(images: any[]) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
}


async function loadResources(): Promise<void> {
    try {
      const imageAssets = await getCacheImages([
        require('../assets/profilePic.jpg'),
        require('../assets/onboarding1.jpg'),
        require('../assets/onboarding2.jpg'),
        require('../assets/onboarding3.jpg'),
        require('../assets/blank-pp.jpg'),
      ]);
      return
    } catch (e) {
      // You might want to provide this error information to an error reporting service
      console.warn(e);
    }
}
  