export interface IDefineUsernameScreenPropsWithoutNavigation {}
export interface IDefineUsernameScreenProps {
    navigationController: IDefineUsernameScreenNavigationController
}
export interface IDefineUsernameScreenNavigationController {
    goToFindYourFriendsScreen(): void
}

export interface IDefineUsernameScreenState {
    usernameInput: string
    error: string | undefined
}


export interface IDefineUsernameViewProps{
    onUsernameInputChange(input: string): void
    onPressConfirm(): void
    error: string | undefined
}


