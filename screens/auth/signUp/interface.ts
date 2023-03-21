import {ISignupResult} from '../../../domain/use-cases/Auth/types'

export default interface ISignupScreen {
    onPressSignup(): void;
}

export interface ISignupScreenState {
    emailInput: string
    passwordInput: string
    confirmPasswordInput: string
    confirmSignupModalVisible: boolean
    error?: string
}

export interface ISignupScreenPropsWithoutNavigation {

}
export interface ISignupScreenProps extends ISignupScreenPropsWithoutNavigation{
    navigationController: ISignupScreenNavigationController
}
export interface ISignupScreenNavigationController {
    goToConfirmSignup(email: string): void;
    goToApp(): void;
}



export interface IConfirmSignupModalViewProps {
    visible: boolean
    email: string
    onPressCofirmationCodeReceived(): void;
}
