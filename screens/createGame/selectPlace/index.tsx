
import { IPlaceListItemState } from "../../../app/features/place/types";
import { AbstractPlaceListScreen } from "../../placeList";



export interface ISelectPlaceScreenNavigationController{
    goToSelectTimeSlot(placeData: IPlaceListItemState): void
}

export class SelectPlaceScreen extends AbstractPlaceListScreen<ISelectPlaceScreenNavigationController>{
    navigationController: ISelectPlaceScreenNavigationController = this.props.navigationController
    onPressPlace(placeData: IPlaceListItemState){
        this.navigationController.goToSelectTimeSlot(placeData)
    }
}

