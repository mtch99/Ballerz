import { CityRepository } from "../../repositories/City";
import { ICity } from "../types";
import { ICityModel, ICityRepository, ICityUseCase } from "./interface";


export class CityUseCase implements ICityUseCase {
    repo: ICityRepository
    model: ICityModel
    constructor(model: ICityModel){
        this.repo = new CityRepository()
        this.model = model
    }

    async listCities(): Promise<ICity[]> {
        const cityList = await this.repo.listCities();
        this.model.onNewCityList(cityList);
        return cityList;
    }


    
}