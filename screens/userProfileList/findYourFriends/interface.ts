
import { IUserProfileData } from "../../../domain/use-cases/types"
import { ISelectableUserProfileData, IUserProfileListViewProps } from "../../interface"
import { ISelectableUserProfileListScreenState, ISelectableUserProfileListViewProps } from "../interface"

export interface IFindYourFriendsScreenPropsWithoutNavigation {
    // userProfileDataList: IUserProfileData[]
}
export interface IFindYourFriendsScreenProps extends IFindYourFriendsScreenPropsWithoutNavigation {
    navigationController: IFindYourFriendsScreenNavigationController
}
export interface IFindYourFriendsScreenNavigationController {
    onFriendshipRequestsSent(): void
}

export interface IFindYourFriendsScreenState extends ISelectableUserProfileListScreenState {
    userList: ISelectableUserProfileData[]
}

export interface IFindYourFriendsViewProps extends ISelectableUserProfileListViewProps {
    shareableLink: string
    onPressContinue(): void
    onFilterInputChange(filterExpression: string): void
}




