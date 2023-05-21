import { NavigatorScreenParams, useNavigation } from "@react-navigation/native"
import { IPlaceProfileScreenNavigationController } from "../../screens/placeProfile/interface"
import { BaseStackNavigationProp, BaseStackParamList, BaseStackScreenProps } from "./types"
import { PlaceProfileScreen } from "../../screens/placeProfile"
import { TabRouter } from "react-navigation"
import { IUserProfileScreenNavigationController } from "../../screens/userProfile/interface"
import { IUserProfileDataState } from "../../app/features/types"
import { UserProfileScreen } from "../../screens/userProfile"
import { IUserProfileListScreenNavigationController } from "../../screens/userProfileList/interface"
import FriendsListScreen, { AttendantsListScreen, IFriendListScreenPropsWithoutNavigation } from "../../screens/userProfileList/friendsList"
import { CreateGameStackNavigator } from "./createGameStack"
import { IPlaceData, IUserProfileData } from "../../domain/use-cases/types"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { CreateGameStackParamList } from "./createGameStack/types"

export function PlaceProfileScreenWrapper(props: BaseStackScreenProps<'PlaceProfileScreen'>){

    const navigation = useNavigation<BaseStackNavigationProp<'PlaceProfileScreen'>>()

    const navigationController: IPlaceProfileScreenNavigationController = {
        goToCreateTimeSlot: function (placeDate: IPlaceData): void {
            const navigationParams: NavigatorScreenParams<CreateGameStackParamList> = {
                screen: "SelectTimeSlot",
                params: {
                    chosenPlace: placeDate
                }
            }
            navigation.navigate("CreateGameStack", navigationParams)
        },
        goToAttendantsScreen: (attendantsList: IUserProfileData[]) => {
            const screen: keyof BaseStackParamList = 'AttendantsListScreen'
            const params: IFriendListScreenPropsWithoutNavigation = {
                friendsList: attendantsList
            }
            navigation.navigate('AttendantsListScreen', params)
        },
    }

    if(!props.route.params){
        return(
            <></>
        )
    }

    return(
        <PlaceProfileScreen
            placeId={props.route.params.placeId}
            {...{navigationController}}
        />
    )
}


export function UserProfileScreenWrapper(props: BaseStackScreenProps<'UserProfileScreen'>){

    const {navigation, route} = props

    const navigationController: IUserProfileScreenNavigationController = {
        goToUserProfile(userProfileData: IUserProfileDataState) {
            navigation.push('UserProfileScreen', { userProfileData })
        },
        goToPlaceProfile: function (id: string): void {
            throw new Error("Function not implemented.")
        },
        goToCommentsScreen: function (gameId: string): void {
            throw new Error("Function not implemented.")
        },
        goToAttendantsListScreen: function (gameId: string): void {
            throw new Error("Function not implemented.")
        },
        goToFriendsListScreen(userProfileList) {
            navigation.push('FriendsListScreen', { friendsList: userProfileList })
        },
        goBack: function (): void {
            navigation.goBack()
        }
    }

    return(
        <UserProfileScreen
            userProfileData={route.params.userProfileData}
            {...{navigationController}}
        />
    )
}


export function FriendsListScreenWrapper(props: BaseStackScreenProps<'FriendsListScreen'>){
    const {navigation, route} = props

    const navigationController: IUserProfileListScreenNavigationController = {
        goToUserProfile: function (userProfileData): void {
            navigation.push('UserProfileScreen', {userProfileData});
        }
    }

    return(
        <FriendsListScreen
        {...{navigationController, friendsList: route.params.friendsList}}
        />
    )

}


export function AttendantsListScreenWrapper(props: BaseStackScreenProps<'AttendantsListScreen'>){
    const {navigation, route} = props

    const navigationController: IUserProfileListScreenNavigationController = {
        goToUserProfile: function (userProfileData): void {
            navigation.push('UserProfileScreen', {userProfileData});
        }
    }

    return(
        <AttendantsListScreen
        {...{navigationController, friendsList: route.params.friendsList}}
        />
    )

}


export function CreateGameStackWrapper(props: BaseStackScreenProps<'CreateGameStack'>){
    const {navigation, route} = props

    return(
        <CreateGameStackNavigator/>
    )
}