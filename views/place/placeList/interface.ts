import { IPlaceData } from "../../../use-cases/types";
import { IPlaceListViewProps } from "./../../../screens/placeList/interface";

export interface IPlaceItemViewProps {
    placeData: IPlaceData
    onPressPlaceItem: IPlaceListViewProps['onPressPlaceItem']
}