import { useNavigation } from "@react-navigation/native";
import PlaceListScreen from "../../../screens/placeList";
import { IPlaceSearchScreenNavigationController } from "../../../screens/placeList/interface";
import UserProfileSearchScreen from "../../../screens/userProfileSearch";
import { ExploreStackNavigationProp, ExploreStackScreenProps } from "../types";
import { IPlaceProfileScreenNavigationController } from "../../../screens/placeProfile/interface";
import { PlaceProfileScreen } from "../../../screens/placeProfile";
import { SearchStackScreenProps } from "./types";


export function UserProfileSearchScreenWrapper(){
    return <UserProfileSearchScreen/>
}


export function PlaceSearchScreenWrapper(){

    const navigation = useNavigation<ExploreStackNavigationProp<'SearchStack'>>()

    const navigationController: IPlaceSearchScreenNavigationController = {
        goToPlaceProfile: (id: string) => {
            navigation.push('PlaceProfileScreen', {placeId: id});
            // console.error("Method not implemented")
        },
    }

    return <PlaceListScreen navigationController={navigationController}/>
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