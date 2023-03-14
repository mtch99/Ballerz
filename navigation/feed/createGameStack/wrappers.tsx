import { ISelectPlaceScreenNavigationController, SelectPlaceScreen } from "../../../screens/createGame/selectPlace"
import SelectTimeSlotScreen, { ISelectTimeSlotScreenNavigationController, ISelectTimeSlotScreenProps } from "../../../screens/createGame/selectTimeSlot"
import { IPlaceData } from "../../../use-cases/types"
import { CreateGameStackScreenProps } from "./types"





export function SelectPlaceScreenWrapper(props: CreateGameStackScreenProps<'SelectPlace'>){

    const navigation = props.navigation

    const navigationController: ISelectPlaceScreenNavigationController = {
        goToSelectTimeSlot(placeData) {
            navigation.navigate('SelectTimeSlot', {
                chosenPlace: placeData,
            })
        },
    }

    return(
        <SelectPlaceScreen
            {...{navigationController}}
        />
    )
}


export function SelectTimeSlotScreenWrapper(props: CreateGameStackScreenProps<'SelectTimeSlot'>){

    const navigation = props.navigation
    const route = props.route

    const navigationController: ISelectTimeSlotScreenNavigationController = {
        onGameCreated: function (): void {
            throw new Error("Function not implemented.")
        }
    }

    const chosenPlace: IPlaceData = route.params.chosenPlace
    
    const screenProps: ISelectTimeSlotScreenProps = {
        navigationController,
        chosenPlace,
        startingTime: route.params.startingTime,
        endingTime: route.params.endingTime
    }

    return <SelectTimeSlotScreen {...{...screenProps}}/>
}
