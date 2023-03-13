import { useNavigation } from "@react-navigation/native"
import { IPlaceProfileScreenNavigationController } from "../../screens/placeProfile/interface"
import { BaseStackNavigationProp, BaseStackScreenProps } from "./types"
import { PlaceProfileScreen } from "../../screens/placeProfile"
import { TabRouter } from "react-navigation"

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