import { IPlaceData } from "../../../app/features/feed/slice/interface";

export interface IPlaceItemViewProps {
    placeData: IPlaceData
    onPressPlaceItem: (id: string) => void
}