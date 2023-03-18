import { IAuthModel } from "../../../../domain/use-cases/Auth/interface"
import { ILoginInput, UserBasicData } from "../../../../domain/use-cases/Auth/types"
import { useAppSelector } from "../../../hooks"
import { AppDispatch } from "../../../store"
import { UserState, setLastSignupInput, setUser } from "../slice"

interface IAuthModelInput {
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector
}


export const createAuthModel = (input: IAuthModelInput): IAuthModel => {
    return {
        onNewRegisteredUserEvent(newUserData: ILoginInput) {
            const payload = {email: newUserData.email}
            input.dispatchFunc(setLastSignupInput(payload))
        },

        onhNewLoggedInUserEvent(userData: UserBasicData): void {
            const payload: UserState = {
                email: userData.email,
                profileData: undefined
            }
            input.dispatchFunc(setUser(payload))
        }
    }
}
