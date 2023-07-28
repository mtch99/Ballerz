import { PlayMutationInput, presenceType } from "../../../infrastructure/BallerzServices/BallerzAPI/API";
import BallerzGameClient from "../../../infrastructure/BallerzServices/BallerzAPI/GameCient";
import { GetMyPresencesQuery } from "../../../infrastructure/BallerzServices/BallerzAPI/GameCient/queries";
import { Game, PresenceWithoutGame } from "../../../infrastructure/BallerzServices/BallerzAPI/types";
import { CreateGameErrorReason, ICheckInResult, ICheckinInput, ICheckoutInput, ICommentInput, ICreateGameInput, ICreateGameResult, IGameRepository } from "../../use-cases/feed/interface";
import { IAttendance, IFeedItem, IGame, IUserProfileData } from "../../use-cases/types";



export default class GameRepository implements IGameRepository {

    gameClient = new BallerzGameClient()

    constructor(){

    }
    
    async getMyGamesList(userProfileID: string): Promise<{ gameID: string; }[]> {
        const response = await this.gameClient.getMyPresences(userProfileID)
        if(response){
            return GameAdapter.parseMyPresenceList(response)
        } else {
            return []
        }

    }

    async checkOut(input: ICheckoutInput): Promise<boolean> {
        let result = true
        const response = await this.gameClient.deletePresence(input.attendanceID)
        if(!response?.deletePresence?.id){
            result = false
        }
        return result
    }


    async createGame(input: ICreateGameInput): Promise<ICreateGameResult>{
        let result: ICreateGameResult = {
            feedItem: undefined
        }
        
        const playMutationInput: PlayMutationInput = {
            ...input,
            startingDateTime: input.startingTime.toISOString(),
            endingDateTime: input.endingTime.toISOString(),
            presenceType: presenceType.spontaneous,
        }

        const feedItem = await this.playRequest(playMutationInput)
        if(feedItem){
            const game = await this.gameClient.getGame(feedItem.id, input.userProfileID)
            let attendanceID: string | undefined
            if(game){

                const presenceList = game.getGame?.presenceList?.items
                if(presenceList && presenceList.length > 0){
                    attendanceID = presenceList[0].id
                }
                result = {
                    feedItem,
                    attendanceID
                }
            } else {
                result = {
                    error: {
                        reason: CreateGameErrorReason.SERVER_ERROR,
                        description: "Veuillez réessayez plus tard"
                    },
                }
            }
        }
        return result
    };

    async getAllGames(myUserProfileID?: string): Promise<IFeedItem[]> {
        const userEmail = myUserProfileID? myUserProfileID:"undefined"
        const response = await this.gameClient.getAllGames(userEmail)
        if(response?.listGames){
            const result: IFeedItem[] = []
            response.listGames.items.forEach((gameDoc) => {
                const parsedGame = GameAdapter.parseGame(gameDoc)
                if(parsedGame){
                    result.push(parsedGame)
                    // console.log(`\n Game.startinnTime: ${parsedGame.startingTime} \n`)
                }
            })
            return result
        } else {
            return []
        }
    }

    private async playRequest(input: PlayMutationInput): Promise<IFeedItem|undefined> {
        let result: IFeedItem|undefined;
        const mutationInput: PlayMutationInput = {
            placeID: input.placeID,
            startingDateTime: input.startingDateTime,
            endingDateTime: input.endingDateTime,
            userProfileID: input.userProfileID,
            presenceType: presenceType.spontaneous
        }
        const response = await this.gameClient.play(mutationInput, input.userProfileID)
        if(response?.playMutation){
            const length = response.playMutation.length
            if(length > 0){
                const feedItem = GameAdapter.parseGame(response.playMutation[length-1])
                if(feedItem){
                    result = feedItem
                }
            }
        }
        return result
    }

    async checkIn(input: ICheckinInput): Promise<ICheckInResult> {
        let result: ICheckInResult = {
            error: false,
            attendanceID: ""
        }
        const playMutationInput: PlayMutationInput = {
            placeID: input.placeData.id,
            startingDateTime: input.attendance.arrivalDateTime.toISOString(),
            endingDateTime: input.attendance.departureDateTime.toISOString(),
            userProfileID: input.attendance.userProfileData.id,
            presenceType: presenceType.spontaneous
        }


        const response = await this.playRequest(playMutationInput)
        if(response){
            if(response){
                const game = await this.gameClient.getGame(response.id, input.attendance.userProfileData.id)
                let attendanceID: string | undefined
                if(game){

                    const presenceList = game.getGame?.presenceList?.items
                    if(presenceList && presenceList.length > 0){
                        attendanceID = presenceList[0].id
                    }
                }
                result = {
                    error: false,
                    attendanceID
                }
            }
        } else {
            result = {
                error: true
            }
        }
        return result
    }

    comment(input: ICommentInput): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}



export class GameAdapter {

    static parseGame(game: Game | null): IFeedItem | null {
        //TODO: Remove the preesence list length condition
        if(game?.place){
            const result: IFeedItem = {
                placeID: game.place.id,
                place: game.place,
                id: game.id,
                friendsThere: parseFriendsThere(game),
                comments: [],
                badges: [],
                startingTime: game.startingDateTime,
                endingTime: game.endingDateTime,
                attendants: this.parsePresenceList(game.presenceList.items)
            }
            return result
        }
        return null
    }


    static parsePresenceDoc(presenceDoc: PresenceWithoutGame): IAttendance | null {
        if(presenceDoc?.userProfile){
            let isFriend = false
            if(presenceDoc.userProfile.friends){
                const friendList = presenceDoc.userProfile.friends.items
                if(friendList.length > 0){
                    isFriend = true
                }
            } else {
                console.error(`Could not yield friendship.. Returned false`)
                isFriend = false
            }
            return {
                id: presenceDoc.id,
                userProfileData: {
                    ...presenceDoc.userProfile,
                    isFriend,
                    badges: []
                },
                arrivalDateTime: presenceDoc.startingDateTime,
                departureDateTime: presenceDoc.endingDateTime,
            }
        }
        return null

    }

    static parsePresenceList(presenceList: Array<PresenceWithoutGame | null>): IGame['attendants'] {
        const result: IGame['attendants'] = []
        presenceList?.forEach((presenceDoc) => {
            if(presenceDoc){
                const parsedPresence = this.parsePresenceDoc(presenceDoc)
                if(parsedPresence){
                    result.push(parsedPresence)
                }
            }
        })
        return result
    }


    static parseMyPresenceList(response: GetMyPresencesQuery): {gameID: string}[]{
        const result: {gameID: string}[] = []
        const presenceList = response.listPresences?.items
        if(presenceList){
            for(let presence of presenceList){
                if(presence?.gameID){
                    result.push({gameID: presence?.gameID})
                }
            }
        }
        return result
    }

}


function parseFriendsThere(game: Game): IUserProfileData[]{
    const friendsThere: IUserProfileData[] = [] 
    game.presenceList.items.forEach((item) => {
        if(item){
            if(item.userProfile.friends){
                // Friends list is filtered in the query
                // Here the filter is supposed to be the current user email
                const filteredFriendList = item.userProfile.friends
                const isFriend =  filteredFriendList.items.length > 0
                if(isFriend){
                    const userProfileData: IUserProfileData = {
                        id: item.userProfile.id,
                        username: item.userProfile.username,
                        badges: [],
                        isFriend: true
                    }
                    friendsThere.push(userProfileData)
                }
            } else {
                console.error("Friends list is empty, could not find the game's friends there")
            }
        }
    })

    return friendsThere
}