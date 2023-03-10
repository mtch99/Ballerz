import { IGame, IPlaceData } from "../types";

export interface IPlaceProfile extends IPlaceData{
    games: IGame[]
}