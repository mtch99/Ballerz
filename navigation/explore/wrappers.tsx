import { useNavigation } from "@react-navigation/native";
import UserProfileSearchScreen from "../../screens/userProfileSearch";
import { ExploreStackNavigationProp } from "./types";
import { IPlaceSearchScreenNavigationController } from "../../screens/placeSearch/interface";
import PlaceListScreen from "../../screens/placeSearch";


export function UserProfileSearchScreenWrapper(){
    return <UserProfileSearchScreen/>
}


export function PlaceSearchScreenWrapper(){

    const navigation = useNavigation<ExploreStackNavigationProp<'PlaceSearchScreen'>>

    const navigationController: IPlaceSearchScreenNavigationController = {
        goToPlaceProfile: (id: string) => {
            console.error("Method not implemented")
        }
    }

    return <PlaceListScreen {...{navigationController}}/>
}