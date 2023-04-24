import { IAttendance } from "./../types";
import { IPlaceData } from "../types";
import { IComment, IFeed, IFeedItem, IUserProfileData } from "../types";


export default interface IFeedModel extends IFeedModelEventListener{
    newFeedEventHandler: (payload: IFeed) => void
    checkInEventHandler: (payload: ICheckinEventPayload) => void
    commentEventHandler: (payload: ICommentEventPayload) => void
    newGameEventHandler: (payload: INewGameEventPayload) => any
}


export interface ICommentEventPayload{
    feedItemId: string,
    comment: IComment
}

export interface IFeedUseCase {
    getFeed(email?: string): Promise<IFeedItem[]>
    checkIn(payload: ICheckinInput): Promise<ICheckInResult>
    comment(input: ICommentInput): Promise<boolean>
    createGame(input: ICreateGameInput): Promise<ICreateGameResult>
    checkOut(input: ICheckoutInput): Promise<boolean>
}

export interface ICheckInResult {
    error: boolean,
    attendanceID?: string,
}


export interface IGameRepository {
    createGame(input: ICreateGameInput): Promise<ICreateGameResult>
    getAllGames(email?: string): Promise<IFeedItem[]>
    checkIn(payload: ICheckinInput): Promise<ICheckInResult>
    comment(input: ICommentInput): Promise<boolean>
    createGame(input: ICreateGameInput): Promise<ICreateGameResult>
    checkOut(input: ICheckoutInput): Promise<boolean>
}


export interface ICommentInput {
    author: IUserProfileData,
    feedItemId: IFeedItem['id'],
    text: IComment['text'],
}



export interface ICreateGameInput{
    placeID: IPlaceData['id'],
    userProfileID: IUserProfileData['id'],
    startingTime: Date
    endingTime: Date
}
export interface ICreateGameResult{
    error: boolean
    feedItem?: IFeedItem 
    attendanceID?: string 
}
export interface INewGameEventPayload extends IFeedItem{}



export interface ICheckinInput {
    id: IFeedItem['id']
    attendance: {
        userProfileData: IUserProfileData
        arrivalDateTime: Date,
        departureDateTime: Date,
    }
    placeData: IPlaceData
}


export interface ICheckoutInput {
    attendanceID: string,
    feedItemID: string
    userProfile: IUserProfileData
}
export interface ICheckinEventPayload extends ICheckinInput{
    attendanceID: string
}



export interface IFeedModelEventListener {
    newFeedEventHandler: (payload: IFeed) => any
    checkInEventHandler: (payload: ICheckinEventPayload) => any
    newGameEventHandler: (payload: INewGameEventPayload) => any
    commentEventHandler: (payload: ICommentEventPayload) => any
    onCheckout: (payload: ICheckoutInput) => any
}