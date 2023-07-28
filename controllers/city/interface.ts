import { ICity } from "../../domain/use-cases/types";


export default interface ICityController {
    listCities(): Promise<Array<ICity>>;
}