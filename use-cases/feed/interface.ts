import { IComment, IFeed, IFeedItem, IUserProfileData } from "./types";

export interface IFeedEventObserver {
    newFeedEventHandler: (payload: IFeed) => any
    checkInEventHandler: (payload: ICheckinEventPayload) => any
    commentEventHandler: (payload: ICommentEventPayload) => any
}

export default interface IFeedModel extends Partial<IFeedEventObserver>{
    newFeedEventHandler: (payload: IFeed) => void
    checkInEventHandler: (payload: ICheckinEventPayload) => void
    commentEventHandler: (payload: ICommentEventPayload) => void
}

export interface ICommentEventPayload{
    feedItemId: string,
    comment: IComment
}

export interface IFeedUseCase {
    getFeed(): Promise<IFeedItem[]>
    checkIn(payload: ICheckinEventPayload): Promise<boolean>
    comment(input: ICommentInput): Promise<boolean>
}

export interface ICommentInput {
    author: IUserProfileData,
    feedItemId: IFeedItem['id'],
    text: IComment['text'],
}

export interface ICheckinEventPayload{
    id: IFeedItem['id']
    userProfile: IUserProfileData
}

