import { IScreenState } from "./../../interface";
import { ImageSourcePropType } from "react-native"

export interface IDefineUsernameScreenPropsWithoutNavigation {}
export interface IDefineUsernameScreenProps {
    navigationController: IDefineUsernameScreenNavigationController
}
export interface IDefineUsernameScreenNavigationController {
    goToFindYourFriendsScreen(): void
}

export interface IDefineUsernameScreenState extends IScreenState {
    usernameInput: string
    error: string | undefined
    profilePicSource: ImageSourcePropType
}


export interface IDefineUsernameViewProps{
    onUsernameInputChange(input: string): void
    onPressConfirm(): void
    onPressProfilePic(): void
    profilePicSource: ImageSourcePropType
    error: string | undefined
    loading: boolean
}


