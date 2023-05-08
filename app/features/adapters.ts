import { IGame, IUserProfile, IUserProfileData } from "../../domain/use-cases/types"
import { IGameState, IUserProfileState } from "./types"
import { INewUserProfileListActionPayload } from "./userProfile/userProfileList/slice/actions"

export class UserProfileModelAdapter{

    static parseUserProfileList(userProfileList: IUserProfileData[]): INewUserProfileListActionPayload{
        return {
            items: [...userProfileList]
        }
    }

    static parseUserProfile(userProfile: IUserProfile): IUserProfileState{

        return {
            ...userProfile,
            games: this.parseGameList(userProfile.games)
        }
    }

    static parseGameList(gameList: IGame[]): IGameState[]{
        const result: IGameState[] = []
    
        if(gameList.length > 0){
            for(let game of gameList){
                result.push(this.parseGame(game))
            }
        }
    
        return result
    }

    static parseGame(game: IGame): IGameState{
        return {
            ...game,
        }
    }
}