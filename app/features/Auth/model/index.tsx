import { IAppControllerEventListener } from "../../../../controllers/interface"
import { IAuthUCIEventListener } from "../../../../domain/use-cases/auth/interface"
import { ILoginInput, ISignupInput, UserBasicData } from "../../../../domain/use-cases/auth/types"
import { IGame, IUserProfile, IUserProfileData } from "../../../../domain/use-cases/types"
import { useAppSelector } from "../../../hooks"
import { AppDispatch } from "../../../store"
import { UserProfileModelAdapter } from "../../adapters"
import { IGameState, IUserProfileState } from "../../types"
import { UserState, preparedData, setLastSignupInput, setLoginInput, setUser, setUserProfile } from "../slice"

interface IAuthModelInput {
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector
}

export interface IAuthModel extends IAuthUCIEventListener, IAppControllerEventListener {}


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
            if (userData.profile) {
                profile = UserProfileModelAdapter.parseUserProfile(userData.profile)
            }
            const payload: UserState = {
                email: userData.email,
            }

            input.dispatchFunc(setUser(payload))
        },

        onUsernameDefinedEvent(userProfile: IUserProfile): void {
            const actionPayload: IUserProfileState = AuthModelAdapter.parseUserProfile(userProfile)
            input.dispatchFunc(setUserProfile({ profile: actionPayload }))
        },


        onDataPreparedEvent: function (): void {
            input.dispatchFunc(preparedData())
        }
    }
    return authModel
}



export class AuthModelAdapter {

    static parseUserProfile(userProfile: IUserProfile): IUserProfileState {
        const games: IUserProfileState['games'] = this.parseGameList(userProfile.games)
        
        const result: IUserProfileState = {
            ...userProfile,
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




