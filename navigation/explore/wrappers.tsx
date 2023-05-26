import { NavigatorScreenParams, useNavigation } from "@react-navigation/native";
import { IPlaceProfileScreenNavigationController } from "../../screens/placeProfile/interface";
import { PlaceProfileScreen } from "../../screens/placeProfile";
import { BaseStackScreenProps, BaseStackNavigationProp, BaseStackParamList } from "../base/types";
import { IUserProfileScreenNavigationController } from "../../screens/userProfile/interface";
import { IUserProfileScreenPropsWithoutNavigation, UserProfileScreen } from "../../screens/userProfile";
import { ExploreStackNavigationProp, ExploreStackScreenProps } from "./types";
import ExploreTabScreen from "../../screens/ExploreTabScreen";
import { IPlaceSearchScreenNavigationController } from "../../screens/placeList/interface";
import { IUserProfileDataState } from "../../app/features/types";
import { BaseStackNavigator } from "../base";
import { IUserProfileListScreenNavigationController } from "../../screens/userProfileList/interface";
import { IPlaceData, IUserProfileData } from "../../domain/use-cases/types";
import React from "react";
import { AppContext } from "../../controllers/provider";



export function PlaceProfileScreenWrapper(props: BaseStackScreenProps<'PlaceProfileScreen'>){

    const navigation = useNavigation<BaseStackNavigationProp<'PlaceProfileScreen'>>()

    const navigationController: IPlaceProfileScreenNavigationController = {
        goToCreateTimeSlot: function (placeDate: IPlaceData): void {
            throw new Error("Function not implemented.");
        },
        goToAttendantsScreen: function (attendantsList: IUserProfileData[]): void {
            throw new Error("Function not implemented.");
        }
    }

    return(
        <PlaceProfileScreen
            placeId={props.route.params.placeId}
            {...{navigationController}}
        />
    )
}


export function UserProfileScreenWrapper(props: ExploreStackScreenProps<'UserProfileScreen'>){

    const {navigation, route} = props

    const navigationController: IUserProfileScreenNavigationController = {
        goToUserProfile(userProfileData: IUserProfileDataState) {
            const params: NavigatorScreenParams<BaseStackParamList> = {
                screen: 'UserProfileScreen',
                params: {
                    userProfileData
                }
            };
            navigation.push('BaseStack', params);
        },
        goToPlaceProfile: function (id: string): void {
            throw new Error("Function not implemented.");
        },
        goToCommentsScreen: function (gameId: string): void {
            throw new Error("Function not implemented.");
        },
        goToAttendantsListScreen: function (gameId: string): void {
            throw new Error("Function not implemented.");
        },
        goToFriendsListScreen(userProfileList) {
            const params: NavigatorScreenParams<BaseStackParamList> = {
                screen: 'FriendsListScreen',
                params: {
                    friendsList: userProfileList
                }
            };
            navigation.push('BaseStack', params);
        },
        goBack: function (): void {
            navigation.goBack()
        }
    }

    return(
        <UserProfileScreen
            userProfileData={props.route.params.userProfileData}
            {...{navigationController}}
        />
    )
}


export function ExploreTabScreenWrapper(props: ExploreStackScreenProps<'SearchStack'>){
   
    const {navigation} = props

    const {placeController, userProfileController, authState} = React.useContext(AppContext)

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // console.log(`My UserProfile ID: ${authState.profile?.id}`)
            userProfileController.getAllUserProfiles()
            placeController.getAllPlaces()
        });
        return unsubscribe;
    }, [navigation])

    const placeSearcScreenNavigationController: IPlaceSearchScreenNavigationController = {
        goToPlaceProfile: function (id: string): void {
            const params: NavigatorScreenParams<BaseStackParamList> = {
                screen: "PlaceProfileScreen",
                params: {
                    placeId: id,
                }
            }
            navigation.navigate("BaseStack", params)
            // navigation.navigate("PlaceProfileScreen", {placeId: id})
        }
    }

    const userProfileSearchScreenNavigationController: IUserProfileListScreenNavigationController = {
        goToUserProfile: function (userProfileData: IUserProfileDataState): void {
            const params: NavigatorScreenParams<BaseStackParamList> = {
                screen: "UserProfileScreen",
                params: {
                    userProfileData,
                }
            }
            navigation.navigate("BaseStack", params)
        }
    }

    return (
        <ExploreTabScreen
            {...{
                placeSearcScreenNavigationController,
                userProfileSearchScreenNavigationController
            }}
        />
    )
}


export function BaseStackWrapper(props: ExploreStackScreenProps<'BaseStack'>){


    return(
        <BaseStackNavigator/>
    )
}