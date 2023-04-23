
import React from "react";
import { IPlaceListItemState } from "../../../app/features/place/types";
import PlaceSearchScreen, {IPlaceListScreenNavigationController } from "../../placeList";
import PlaceListView from "../../../views/place/placeList";
import BallerzSafeAreaView from "../../../views/safeArea";
import SearchBar from "../../../views/makeFriends/SearchBar";



export interface ISelectPlaceScreenNavigationController extends IPlaceListScreenNavigationController{
    goToSelectTimeSlot(placeData: IPlaceListItemState): void
}

export interface ISelectPlaceScreenProps {
    navigationController: ISelectPlaceScreenNavigationController
}

export class SelectPlaceScreen extends PlaceSearchScreen<ISelectPlaceScreenNavigationController>{
    navigationController: ISelectPlaceScreenNavigationController = this.props.navigationController
    onPressPlace(placeData: IPlaceListItemState){
        this.navigationController.goToSelectTimeSlot(placeData)
    }

    render(): React.ReactNode {
        return(
            <BallerzSafeAreaView
            >
                <>
                <SearchBar
                    onSearchInputChange={this.onFilterInputChange.bind(this)}
                />
                <PlaceListView
                    placeList={this.state.filteredList}
                    onPressPlaceItem={this.onPressPlace}
                />
                </>
            </BallerzSafeAreaView>
        )
    }
}

