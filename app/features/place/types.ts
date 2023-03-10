import { IPlaceProfile } from "./../../../use-cases/place/types";
import { IPlace } from "../../../use-cases/types";
import { IFeedItemState, IUserProfileData } from "../feed/slice/interface";

export interface IPlaceModelState{
    PlaceList: IPlaceListState;
    PlaceRepo: IPlaceMapState
}

export interface IPlaceListState{
    items: IPlaceListItemState[]
}

export interface IPlaceListItemState{
    id: IPlace['id']
    name: IPlace['name']
    address: IPlace['address']
}

export interface IPlaceMapState {
    [key: string]: IPlaceProfileState
}

export interface IPlaceProfileState extends IPlace{
    games: IFeedItemState
}