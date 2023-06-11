import { listCities } from "./../../../infrastructure/BallerzServices/BallerzAPI/graphql/queries";
import { ICity } from "../types";

export interface ICityUseCase{
    listCities(): Promise<ICity[]>
    // AddCity(name: string): Promise<boolean>
}


export interface ICityRepository{
    listCities(): Promise<ICity[]>
}


export interface ICityModel{
    onNewCityList(newCities: ICity[]): void
}