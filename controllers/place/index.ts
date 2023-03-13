import { IPlaceModel } from "../../app/features/place/adapter";
import PlaceUseCase from "../../use-cases/place";
import IPlaceUseCase from "../../use-cases/place/interface";
import IPlaceController from "./interface";

export default class PlaceController implements IPlaceController{

    private placeUseCase: IPlaceUseCase
    

    constructor(placeModel: IPlaceModel){
        this.placeUseCase = new PlaceUseCase(placeModel)
    }

    getAllPlaces(): void {
        this.placeUseCase.getAllPlaces()
    }

    getPlaceProfile(id: string): void {
        this.placeUseCase.getPlaceProfile(id)
    }
}