import { IPlaceModelEventListener } from "./../../domain/use-cases/place/interface";
import { IPlaceModel } from "../../app/features/place/model";
import PlaceUseCase from "../../domain/use-cases/place";
import IPlaceUseCase from "../../domain/use-cases/place/interface";
import { IPlaceProfile } from "../../domain/use-cases/place/types";
import { IPlaceData } from "../../domain/use-cases/types";
import IPlaceController from "./interface";

export class PlaceController implements IPlaceController{

    private placeUseCase: IPlaceUseCase = fakeUseCase
    

    createUseCase(model: IPlaceModelEventListener){
        this.placeUseCase = new PlaceUseCase(model)
        console.error(`\n Place usecase initialized \n`)
    }

    async getAllPlaces(): Promise<void> {
        await this.placeUseCase.getAllPlaces()
        return;
    }

    getPlaceProfile(id: string): void {
        this.placeUseCase.getPlaceProfile(id)
    }
}


const placeController = new PlaceController()
export default placeController;

const fakeUseCase: IPlaceUseCase = {
    observer: {} as IPlaceModelEventListener,
    repository: {
        getAllPlaces: function (): Promise<IPlaceData[]> {
            throw new Error("Function not implemented.");
        },
        getPlaceProfile: function (id: string, userProfileID?: string | undefined): Promise<IPlaceProfile | null> {
            throw new Error("Function not implemented.");
        }
    },
    getAllPlaces: function (): Promise<IPlaceData[]> {
        throw new Error("Function not implemented.");
    },
    getPlaceProfile: function (id: string, userProfielID?: string | undefined): Promise<IPlaceProfile | null> {
        throw new Error("Function not implemented.");
    }
}