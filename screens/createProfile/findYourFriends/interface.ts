import { IUserProfileData } from "../../../domain/use-cases/types"
import { ISelectableUserProfileData, ISelectableUserProfileViewProps } from "../../interface"

export interface IFindYourFriendsScreenPropsWithoutNavigation {
    userProfileDataList: IUserProfileData[]
}
export interface IFindYourFriendsScreenProps extends IFindYourFriendsScreenPropsWithoutNavigation {
    navigationController: IFindYourFriendsScreenNavigationController
}
export interface IFindYourFriendsScreenNavigationController {
    goToMyProfileScreen(): void
}

export interface IFindYourFriendsScreenState {
    userList: ISelectableUserProfileData[]
}



export interface IFindYourFriendsViewProps extends ISelectableUserProfileViewProps {
    shareableLink: string
}




