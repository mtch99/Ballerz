import AsyncStorage from "@react-native-async-storage/async-storage";
import { ICityRepository } from "../../use-cases/Cities/interface";
import { ICity } from "../../use-cases/types";
import cityClient from "../../../infrastructure/BallerzServices/BallerzAPI/CityClient";




export class CityRepository implements ICityRepository{
    async listCities(): Promise<ICity[]> {
        const cityList: ICity[] = []
        const response = await cityClient.listAllCities()
        if(response && response.listCities?.items){
            response.listCities.items.forEach(item => {
                if(item){
                    cityList.push(item)
                }
            })
            this.cacheCityList(cityList)
            return cityList
        } else {
            return await this.getCachedCityList()
        }
    }


    private cacheCityList(cityList: ICity[]): void {
        AsyncStorage.setItem("cityList", JSON.stringify(cityList));
    }

    private async getCachedCityList(): Promise<ICity[]> {
        const cityList = await AsyncStorage.getItem("cityList").then((result) => {
            if(result){
                return JSON.parse(result) as ICity[];
            } else {
                return [];
            }
        });
        return cityList;
    }

}