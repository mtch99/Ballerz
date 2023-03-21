import { IAuthModel } from "../../../../domain/use-cases/Auth/interface"
import { ILoginInput, ISignupInput, UserBasicData } from "../../../../domain/use-cases/Auth/types"
import { IUserProfile } from "../../../../domain/use-cases/types"
import { useAppSelector } from "../../../hooks"
import { AppDispatch } from "../../../store"
import { UserProfileModelAdapter } from "../../userProfile/adapter"
import { IUserProfileState } from "../../userProfile/types"
import { UserState, setLastSignupInput, setLoginInput, setUser } from "../slice"

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
        onhNewLoggedInUserEvent(userData: UserBasicData): void {
            let profile: undefined | IUserProfileState = undefined
            if(userData.profile){
                profile = UserProfileModelAdapter.parseUserProfile(userData.profile)
            }
            const payload: UserState = {
                email: userData.email,
                profile
            }
            
            input.dispatchFunc(setUser(payload))
        }
    }
    return authModel
}




