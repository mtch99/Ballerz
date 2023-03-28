import { useNavigation } from "@react-navigation/native";
import PlaceSearchScreen from "../../../screens/placeList";
import { IPlaceSearchScreenNavigationController } from "../../../screens/placeList/interface";
import UserProfileSearchScreen from "../../../screens/userProfileList";
import { ExploreStackNavigationProp, ExploreStackScreenProps } from "../types";
import { IPlaceProfileScreenNavigationController } from "../../../screens/placeProfile/interface";
import { PlaceProfileScreen } from "../../../screens/placeProfile";
import { SearchStackNavigationProp, SearchStackScreenProps } from "./types";
import { IUserProfileListScreenNavigationController } from "../../../screens/userProfile/interface";


export function UserProfileSearchScreenWrapper(){

    const navigation = useNavigation<ExploreStackNavigationProp<'SearchStack'>>()
    const navigationController: IUserProfileListScreenNavigationController = {
        goToUserProfile(id) {
            navigation.push('UserProfileScreen', {userProfileId: id})
        },
    }
    return <UserProfileSearchScreen
        {...{navigationController}}
    />
}


export function PlaceSearchScreenWrapper(){

    const navigation = useNavigation<ExploreStackNavigationProp<'SearchStack'>>()

    const navigationController: IPlaceSearchScreenNavigationController = {
        goToPlaceProfile: (id: string) => {
            navigation.push('PlaceProfileScreen', {placeId: id});
            // console.error("Method not implemented")
        },
    }

    return <PlaceSearchScreen navigationController={navigationController}/>
}


export function PlaceProfileScreenWrapper(props: ExploreStackScreenProps<'PlaceProfileScreen'>){

    const navigation = useNavigation<ExploreStackNavigationProp<'PlaceProfileScreen'>>()
    const navigationController: IPlaceProfileScreenNavigationController = {

    }

    return(
        <PlaceProfileScreen
            placeId={props.route.params.placeId} {...{navigationController}}        />
    )
}


// export function BaseStackScreenWrapper(){

//     const navigation = useNavigation<ExploreStackNavigationProp<'BaseStack'>>()
//     const navigationController: IPlaceProfileScreenNavigationController = {
//         goToAttendantsListScreen() {
//             navigation.goBack()
//         },
//     }

//     if()

//     return(
//         <></>
//     )
// }