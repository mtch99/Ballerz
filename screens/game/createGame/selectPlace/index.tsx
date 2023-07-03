
import React from "react";
import { IPlaceListItemState } from "../../../../app/features/place/types";
import PlaceSearchScreen, {IPlaceListScreenNavigationController } from "../../../place/placeList";
import PlaceListView from "../../../../views/place/placeList";
import BallerzSafeAreaView from "../../../../views/safeArea";
import SearchBar from "../../../../views/makeFriends/SearchBar";
import { AppContext, IAppContext } from "../../../../controllers/provider";



export interface ISelectPlaceScreenNavigationController extends IPlaceListScreenNavigationController{
    goToSelectTimeSlot(placeData: IPlaceListItemState): void
}

export interface ISelectPlaceScreenProps {
    navigationController: ISelectPlaceScreenNavigationController
}

export class SelectPlaceScreen extends PlaceSearchScreen<ISelectPlaceScreenNavigationController>{
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext
    
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

