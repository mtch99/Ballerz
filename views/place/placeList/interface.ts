import { IPlaceData } from "../../../domain/use-cases/types";
import { IPlaceListViewProps } from "../../../screens/place/placeList/interface";

export interface IPlaceItemViewProps {
    placeData: IPlaceData
    onPressPlaceItem: IPlaceListViewProps['onPressPlaceItem']
}