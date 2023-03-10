import { IGame, IPlace } from "../../../use-cases/types";

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
    games: IGameState[]
}

export interface IGameState {
    id: IGame['id'];
    friendsThere: IGame['friendsThere']
    comments: IGame['comments']
    badges: IGame['badges']
    startingTime: string
    endingTime: string
    attendants: IGame['attendants']
}