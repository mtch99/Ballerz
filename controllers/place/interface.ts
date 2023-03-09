import { IPlaceProfile } from "../../use-cases/place/types"


export default interface IPlaceController {
    getAllPlaces(): void
    getPlaceProfile(id: IPlaceProfile['id']): void
}