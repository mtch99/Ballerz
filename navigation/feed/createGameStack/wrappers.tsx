import { ISelectPlaceScreenNavigationController, SelectPlaceScreen } from "../../../screens/createGame/selectPlace"
import { CreateGameStackScreenProps } from "./types"





export function SelectPlaceScreenWrapper(props: CreateGameStackScreenProps<'SelectPlace'>){

    const navigation = props.navigation

    const navigationController: ISelectPlaceScreenNavigationController = {
        goToSelectTimeSlot(placeData) {
            console.error(`Attempted to navigate to unimplemented 
                SelectTimeSlotScreen with props: ${JSON.stringify(placeData)}`)
        },
    }

    return(
        <SelectPlaceScreen
            {...{navigationController}}
        />
    )
}
