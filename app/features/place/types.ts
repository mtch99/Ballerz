import { IGame, IPlaceData } from "../../../domain/use-cases/types";
import { IGameState } from "../types";

export interface IPlaceModelState{
    PlaceList: IPlaceListState;
    PlaceRepo: IPlaceMapState
}

export interface IPlaceListState{
    items: IPlaceListItemState[]
}

export interface IPlaceListItemState{
    id: IPlaceData['id']
    name: IPlaceData['name']
    address: IPlaceData['address']
}

export interface IPlaceMapState {
    [key: string]: IPlaceProfileState
}

export interface IPlaceProfileState extends IPlaceData{
    games: IGameState[]
}

