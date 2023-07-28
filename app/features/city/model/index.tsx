import { VoidFunctionComponent } from "react"
import { ICityModel } from "../../../../domain/use-cases/Cities/interface"
import { useAppSelector } from "../../../hooks"
import { AppDispatch } from "../../../store"
import { ICity } from "../../../../domain/use-cases/types"
import { setCityList } from "../slice"


interface ICityModelInput {
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector
}

export const createCityModel = (input: ICityModelInput): ICityModel => {
    return {
        onNewCityList(newCities: ICity[]): void{
            input.dispatchFunc(setCityList(newCities))
        }
    }
}