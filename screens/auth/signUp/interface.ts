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
    // navigationController: ISignupScreenNavigationController
}
export interface ISignupScreenNavigationController {
    onSignupSucess(): Promise<void>;
}



export interface IConfirmSignupModalViewProps {
    visible: boolean
}
