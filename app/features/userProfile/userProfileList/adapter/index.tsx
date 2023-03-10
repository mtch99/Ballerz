import { IUserProfile, IUserProfileData } from "../../../../../use-cases/types"
import { IUserProfileModelEventListener } from "../../../../../use-cases/userProfile/interface"
import { useAppSelector } from "../../../../hooks"
import { AppDispatch } from "../../../../store"
import { NEW_USERPROFILELIST } from "../slice"
import { INewUserProfileListActionPayload } from "../slice/actions"
import { IUserProfileListState } from "../slice/interface"

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
        onNewUserProfile(input) {
            console.error(`onNewUserProfile method in UserProfileModel not implemented yet`)
        },
    }
}



class UserProfileModelAdapter{

    static parseUserProfileList(userProfileList: IUserProfileData[]): INewUserProfileListActionPayload{
        return {
            items: [...userProfileList]
        }
    }
}
