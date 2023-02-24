import { IUserProfile } from "../../../../use-cases/types"
import { IUserProfileModelEventListener } from "../../../../use-cases/userProfile/interface"
import { useAppSelector } from "../../../hooks"
import { AppDispatch } from "../../../store"
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
        onNewUserProfileList(input: IUserProfile[]){
            const payload: INewUserProfileListActionPayload = UserProfileModelAdapter.parseUserProfileList(input)
            return modelInput.dispatchFunc(NEW_USERPROFILELIST)
        }
    }
}



class UserProfileModelAdapter{

    static parseUserProfileList(userProfileList: IUserProfile[]): INewUserProfileListActionPayload{
        return {
            items: userProfileList
        }
    }
}
