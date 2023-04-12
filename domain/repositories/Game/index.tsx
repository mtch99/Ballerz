import BallerzGameClient from "../../../infrastructure/BallerzServices/BallerzAPI/GameCient";
import { GameDoc, PresenceDoc } from "../../../infrastructure/BallerzServices/BallerzAPI/GameCient/queries";
import { ICheckinInput, ICommentInput, ICreateGameInput, ICreateGameOutput, IGameRepository } from "../../use-cases/feed/interface";
import { IFeedItem, IUserProfileData } from "../../use-cases/types";



export default class GameRepository implements IGameRepository {

    gameClient = new BallerzGameClient()

    constructor(){

    }

    createGame(input: ICreateGameInput): Promise<ICreateGameOutput>{

    };

    async getAllGames(email?: string): Promise<IFeedItem[]> {
        const userEmail = email? email:"undefined"
        const response = await this.gameClient.getAllGames(userEmail)
        if(response?.listGames){
            const result: IFeedItem[] = []
            response.listGames.items.forEach((gameDoc) => {
                const parsedGame = GameAdapter.parseGame(gameDoc)
                if(parsedGame){
                    result.push(parsedGame)
                }
            })
            return result
        } else {
            return []
        }
    }

    checkIn(payload: ICheckinInput): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    comment(input: ICommentInput): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}



export class GameAdapter {

    static parseGame(game: GameDoc): IFeedItem | null {
        if(game?.place){
            const result: IFeedItem = {
                place: game.place,
                id: game.id,
                friendsThere: [],
                comments: [],
                badges: [],
                startingTime: new Date(game.startingDateTime),
                endingTime: new Date(game.endingDateTime),
                attendants: this.parsePresenceList(game.presenceList.items)
            }
            return result
        }
        return null
    }


    static parsePresenceDoc(presenceDoc: PresenceDoc): IUserProfileData | null {
        if(presenceDoc?.userProfile){
            let isFriend = false
            if(presenceDoc.userProfile.friends.items.length > 0){
                isFriend = true
            }
            return {
                id: presenceDoc.userProfile.id,
                username: presenceDoc.userProfile.username,
                badges: [],
                isFriend
            }
        }
        return null

    }

    static parsePresenceList(presenceList: Array<PresenceDoc | null>): IUserProfileData[] {
        const result: IUserProfileData[] = []
        presenceList?.forEach((presenceDoc) => {
            const parsedPresence = this.parsePresenceDoc(presenceDoc)
            if(parsedPresence){
                result.push(parsedPresence)
            }
        })
        return result
    }
}