import { IPlaceProfile } from "../../domain/use-cases/place/types"


export default interface IPlaceController {
    getAllPlaces(): Promise<void>
    getPlaceProfile(id: IPlaceProfile['id']): void
}