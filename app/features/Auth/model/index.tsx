import { IAuthModel } from "../../../../domain/use-cases/Auth/interface"
import { ILoginInput, ISignupInput, UserBasicData } from "../../../../domain/use-cases/Auth/types"
import { IGame, IUserProfile, IUserProfileData } from "../../../../domain/use-cases/types"
import { useAppSelector } from "../../../hooks"
import { AppDispatch } from "../../../store"
import { UserProfileModelAdapter } from "../../adapters"
import { IGameState, IUserProfileState } from "../../types"
import { UserState, setLastSignupInput, setLoginInput, setUser, setUserProfile } from "../slice"

interface IAuthModelInput {
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector
}


export const createAuthModel = (input: IAuthModelInput): IAuthModel => {
    const authModel: IAuthModel = {
        onNewRegisteredUserEvent(payload: ILoginInput) {
            input.dispatchFunc(setLastSignupInput(payload))
        },

        onNewSignupAttempt: function (payload: ISignupInput): void {
            input.dispatchFunc(setLastSignupInput(payload))
        },
        onNewLoginAttempt: function (payload: ILoginInput): void {
            input.dispatchFunc(setLoginInput(payload))
        },
        onhNewUserLoggedInEvent(userData: UserBasicData): void {
            let profile: undefined | IUserProfileState = undefined
            if(userData.profile){
                profile = UserProfileModelAdapter.parseUserProfile(userData.profile)
            }
            const payload: UserState = {
                email: userData.email,
                profile
            }
            
            input.dispatchFunc(setUser(payload))
        },
        onUsernameDefinedEvent(userProfile: IUserProfile): void {
            const actionPayload: IUserProfileState = AuthModelAdapter.parseUserProfile(userProfile)
            input.dispatchFunc(setUserProfile({profile: actionPayload}))
        },
    }
    return authModel
}



export class AuthModelAdapter {

    static parseUserProfile(userProfile: IUserProfile): IUserProfileState {
        const {id, username, badges} = userProfile
        const games: IUserProfileState['games'] = this.parseGameList(userProfile.games)
        
        const result: IUserProfileState = {
            id,
            username,
            badges,
            games
        }

        return result
    }

    private static parseGame(input: IGame): IGameState{
        return {
            ...input,
            startingTime: input.startingTime.toLocaleDateString(),
            endingTime: input.endingTime.toLocaleDateString()
        }
    }
    
    private static parseGameList(input: IUserProfile['games']): IGameState[]{
        const gameStateList: IGameState[] = []
        for(let game of input){
            gameStateList.push(this.parseGame(game))
        }

        return gameStateList
    }
}




