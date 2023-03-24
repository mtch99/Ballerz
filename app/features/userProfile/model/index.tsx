import { IGame, IUserProfile, IUserProfileData } from "../../../../domain/use-cases/types"
import { IUserProfileModelEventListener } from "../../../../domain/use-cases/userProfile/interface"
import { useAppSelector } from "../../../hooks"
import { AppDispatch } from "../../../store"
import { AuthModelAdapter } from "../../Auth/model"
import { setUserProfile } from "../../Auth/slice"
import { UserProfileModelAdapter } from "../../adapters"
import { parseGame, parseGameList } from "../../place/model"
import { IGameState, IUserProfileState } from "../../types"
import { NEW_USERPROFILELIST } from "../userProfileList/slice"
import { INewUserProfileListActionPayload } from "../userProfileList/slice/actions"
import { IUserProfileListState } from "../userProfileList/slice/interface"
import { NEW_USERPROFILE } from "../userProfileMap/slice"
import { INewUserProfileProfileActionPayload } from "../userProfileMap/slice/actions"

interface IUserProfileModelInput{
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector  
}




export function createUserProfileModel(modelInput: IUserProfileModelInput): IUserProfileModelEventListener {
    return {
        onNewUserProfileList(input: IUserProfileData[]){
            const payload: INewUserProfileListActionPayload = UserProfileModelAdapter.parseUserProfileList(input)
            modelInput.dispatchFunc(NEW_USERPROFILELIST(payload))
        },

        onNewUserProfile(input: IUserProfile) {
            const payload: INewUserProfileProfileActionPayload = UserProfileModelAdapter.parseUserProfile(input);
            modelInput.dispatchFunc(NEW_USERPROFILE(payload));
        },

        setMyProfile(input) {
            // throw new Error("setMyProfile Method not implemented in createUserProfileModel")
            const actionPayload: IUserProfileState = AuthModelAdapter.parseUserProfile(input)
            modelInput.dispatchFunc(setUserProfile({profile: actionPayload}))
        },

        onUsernameDefinedEvent(userProfile: IUserProfile): void {
            const actionPayload: IUserProfileState = AuthModelAdapter.parseUserProfile(userProfile)
            modelInput.dispatchFunc(setUserProfile({profile: actionPayload}))
        },
    }
}




