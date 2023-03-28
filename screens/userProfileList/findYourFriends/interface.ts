
import { IUserProfileData } from "../../../domain/use-cases/types"
import { ISelectableUserProfileData, IUserProfileListViewProps } from "../../interface"
import { ISelectableUserProfileListScreenState } from "../interface"

export interface IFindYourFriendsScreenPropsWithoutNavigation {
    // userProfileDataList: IUserProfileData[]
}
export interface IFindYourFriendsScreenProps extends IFindYourFriendsScreenPropsWithoutNavigation {
    navigationController: IFindYourFriendsScreenNavigationController
}
export interface IFindYourFriendsScreenNavigationController {
    goToMyProfileScreen(): void
}

export interface IFindYourFriendsScreenState extends ISelectableUserProfileListScreenState {
    userList: ISelectableUserProfileData[]
}



export interface IFindYourFriendsViewProps extends IUserProfileListViewProps {
    shareableLink: string
    onPressContinue: () => void
    onFilterInputChange(input: string): void
}




