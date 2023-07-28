import { ICityModel, ICityUseCase } from "./../../domain/use-cases/Cities/interface";
import { ICity } from "../../domain/use-cases/types";
import ICityController from "./interface";
import { CityUseCase } from "../../domain/use-cases/Cities";


class CityController implements ICityController {

    private useCase: ICityUseCase = emptyUseCase


    createUseCase(model: ICityModel) {
        this.useCase = new CityUseCase(model);
    }

    listCities(): Promise<ICity[]> {
        throw new Error("Method not implemented.");
    }

}


const emptyUseCase: ICityUseCase = {
    listCities: function (): Promise<ICity[]> {
        throw new Error("Function not implemented.");
    }
}


const cityController = new CityController();
export default cityController