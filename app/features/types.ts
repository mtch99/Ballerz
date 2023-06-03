import { ICity, IGame, IPlaceData, IUserProfile, IUserProfileData } from "../../domain/use-cases/types";


export interface IUserProfileDataState extends IUserProfileData{
    friendshipRequestSent?: true
}
export interface IUserProfileState extends IUserProfileDataState {
    games: IGameState[]
    friends: IUserProfile['friends']
}

export interface IGameState {
    id: IGame['id'];
    friendsThere: IGame['friendsThere']
    comments: IGame['comments']
    badges: IGame['badges']
    startingTime: string
    endingTime: string
    attendants: IGame['attendants']
    place: IPlaceData
}