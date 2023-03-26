
import { IUserProfileData } from "../../../domain/use-cases/types";
import { IGameState, IUserProfileState } from "../types";




export interface IUserProfileMapState {
    [key: string]: IUserProfileState
}