
import { IUserProfileData } from "../../../domain/use-cases/types";
import { IGameState } from "../place/types";

export interface IUserProfileState extends IUserProfileData {
    games: IGameState[]
}


export interface IUserProfileMapState {
    [key: string]: IUserProfileState
}