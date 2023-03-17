import { IPlaceListItemState, IPlaceListState } from "../../app/features/place/types";


export interface IPlaceSearchScreen {
    onPressPlaceItem(): void
}

export interface IPlaceSearchScreenNavigationController {
    goToPlaceProfile(id: string): void
}

export interface IPlaceListViewProps {
    placeList: IPlaceListState
    onPressPlaceItem: (placeData: IPlaceListItemState) => void
}