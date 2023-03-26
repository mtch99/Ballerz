import { IPlaceData } from "../types";
import { IComment, IFeed, IFeedItem, IUserProfileData } from "../types";


export default interface IFeedModel extends Partial<IFeedEventObserver>{
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
    getFeed(): Promise<IFeedItem[]>
    checkIn(payload: ICheckinInput): Promise<boolean>
    comment(input: ICommentInput): Promise<boolean>
    createGame(input: ICreateGameInput): Promise<ICreateGameOutput>
}


export interface ICommentInput {
    author: IUserProfileData,
    feedItemId: IFeedItem['id'],
    text: IComment['text'],
}



export interface ICreateGameInput{
    placeId: IPlaceData['id'],
    userProfileId: IUserProfileData['id'],
    startingTime: Date
    endingTime: Date
}
export interface ICreateGameOutput{
    error: boolean
    feedItem: IFeedItem
}
export interface INewGameEventPayload extends IFeedItem{}



export interface ICheckinInput {
    id: IFeedItem['id']
    userProfile: IUserProfileData
}
export interface ICheckinEventPayload extends ICheckinInput{}



export interface IFeedEventObserver {
    newFeedEventHandler: (payload: IFeed) => any
    checkInEventHandler: (payload: ICheckinEventPayload) => any
    newGameEventHandler: (payload: INewGameEventPayload) => any
    commentEventHandler: (payload: ICommentEventPayload) => any
}