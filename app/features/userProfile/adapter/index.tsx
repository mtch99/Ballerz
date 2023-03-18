import { IGame, IUserProfile, IUserProfileData } from "../../../../domain/use-cases/types"
import { IUserProfileModelEventListener } from "../../../../domain/use-cases/userProfile/interface"
import { useAppSelector } from "../../../hooks"
import { AppDispatch } from "../../../store"
import { parseGame, parseGameList } from "../../place/adapter"
import { IGameState } from "../../place/types"
import { IUserProfileState } from "../types"
import { NEW_USERPROFILELIST } from "../userProfileList/slice"
import { INewUserProfileListActionPayload } from "../userProfileList/slice/actions"
import { IUserProfileListState } from "../userProfileList/slice/interface"
import { NEW_USERPROFILE } from "../userProfileMap/slice"
import { INewUserProfileProfileActionPayload } from "../userProfileMap/slice/actions"

interface IUserProfileModelInput{
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector  
}


export interface IUserProfileModel extends IUserProfileModelEventListener{}


export function createUserProfileModel(modelInput: IUserProfileModelInput): IUserProfileModel {
    return {
        onNewUserProfileList(input: IUserProfileData[]){
            const payload: INewUserProfileListActionPayload = UserProfileModelAdapter.parseUserProfileList(input)
            modelInput.dispatchFunc(NEW_USERPROFILELIST(payload))
        },
        onNewUserProfile(input: IUserProfile) {
            const payload: INewUserProfileProfileActionPayload = UserProfileModelAdapter.parseUserProfile(input);
            modelInput.dispatchFunc(NEW_USERPROFILE(payload));
        },
    }
}



class UserProfileModelAdapter{

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
                result.push(parseGame(game))
            }
        }
    
        return result
    }

    static parseGame(game: IGame): IGameState{
        return {
            ...game,
            startingTime: game.startingTime.toLocaleDateString(),
            endingTime: game.endingTime.toLocaleDateString()
        }
    }
}
