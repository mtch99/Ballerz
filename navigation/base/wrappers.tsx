import { useNavigation } from "@react-navigation/native"
import { IPlaceProfileScreenNavigationController } from "../../screens/placeProfile/interface"
import { BaseStackNavigationProp, BaseStackScreenProps } from "./types"
import { PlaceProfileScreen } from "../../screens/placeProfile"
import { TabRouter } from "react-navigation"
import { IUserProfileScreenNavigationController } from "../../screens/userProfile/interface"
import { IUserProfileDataState } from "../../app/features/types"
import { UserProfileScreen } from "../../screens/userProfile"
import { IUserProfileListScreenNavigationController } from "../../screens/userProfileList/interface"
import FriendsListScreen from "../../screens/userProfileList/friendsList"

export function PlaceProfileScreenWrapper(props: BaseStackScreenProps<'PlaceProfileScreen'>){

    const navigation = useNavigation<BaseStackNavigationProp<'PlaceProfileScreen'>>()

    const navigationController: IPlaceProfileScreenNavigationController = {
        goToAttendantsListScreen() {
            navigation.goBack()
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
            navigation.push('UserProfileScreen', {userProfileData});
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
            navigation.push('FriendsListScreen', {friendsList: userProfileList});
        },
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