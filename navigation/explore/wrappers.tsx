import { useNavigation } from "@react-navigation/native";
import { IPlaceProfileScreenNavigationController } from "../../screens/placeProfile/interface";
import { PlaceProfileScreen } from "../../screens/placeProfile";
import { BaseStackScreenProps, BaseStackNavigationProp } from "../base/types";
import { IUserProfileListScreenNavigationController } from "../../screens/userProfile/interface";
import { IUserProfileDataState } from "../../app/features/userProfile/userProfileList/slice/interface";
import { UserProfileScreen } from "../../screens/userProfile";
import { ExploreStackScreenProps } from "./types";



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

    const navigationController: IUserProfileListScreenNavigationController = {
        goToUserProfile(id: IUserProfileDataState['id']){
            console.error("sjsjjsjssj")
            navigation.navigation.push('UserProfileScreen', {userProfileId: id})
        }
    }

    return(
        <UserProfileScreen
            userProfileId={props.route.params.userProfileId}
            {...{navigationController}}
        />
    )
}