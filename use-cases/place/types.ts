import { IGame, IPlace } from "../types";

export interface IPlaceProfile extends IPlace{
    games: IGame[]
}