import { useNavigation } from "@react-navigation/native";
import { IPlaceProfileScreenNavigationController } from "../../screens/placeProfile/interface";
import { PlaceProfileScreen } from "../../screens/placeProfile";
import { BaseStackScreenProps, BaseStackNavigationProp } from "../base/types";
import { IUserProfileListScreenNavigationController, IUserProfileScreenNavigationController } from "../../screens/userProfile/interface";
import { UserProfileScreen } from "../../screens/userProfile";
import { ExploreStackNavigationProp, ExploreStackScreenProps } from "./types";
import ExploreTabScreen from "../../screens/ExploreTabScreen";
import { IPlaceSearchScreenNavigationController } from "../../screens/placeList/interface";
import { IUserProfileDataState } from "../../app/features/types";



export function PlaceProfileScreenWrapper(props: BaseStackScreenProps<'PlaceProfileScreen'>){

    const navigation = useNavigation<BaseStackNavigationProp<'PlaceProfileScreen'>>()

    const navigationController: IPlaceProfileScreenNavigationController = {
        goToAttendantsListScreen() {
            navigation.goBack()
        },
    }

    return(
        <PlaceProfileScreen
            placeId={props.route.params.placeId}
            {...{navigationController}}
        />
    )
}


export function UserProfileScreenWrapper(props: ExploreStackScreenProps<'UserProfileScreen'>){

    const navigation = useNavigation<ExploreStackScreenProps<'SearchStack'>>()

    const navigationController: IUserProfileScreenNavigationController = {
        goToUserProfile(userProfileData: IUserProfileDataState) {
            navigation.navigation.push('UserProfileScreen', {userProfileData});
        },
        goToPlaceProfile: function (id: string): void {
            throw new Error("Function not implemented.");
        },
        goToCommentsScreen: function (gameId: string): void {
            throw new Error("Function not implemented.");
        },
        goToAttendantsListScreen: function (gameId: string): void {
            throw new Error("Function not implemented.");
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
   
    const navigation = useNavigation<ExploreStackNavigationProp<'SearchStack'>>()

    const placeSearcScreenNavigationController: IPlaceSearchScreenNavigationController = {
        goToPlaceProfile: function (id: string): void {
            navigation.navigate("PlaceProfileScreen", {placeId: id})
        }
    }

    const userProfileSearchScreenNavigationController: IUserProfileListScreenNavigationController = {
        goToUserProfile: function (userProfileData: IUserProfileDataState): void {
            navigation.navigate('UserProfileScreen', {userProfileData})
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