import { ILoginInput } from "../../../domain/use-cases/auth/types";


export interface ISigninScreenPropsWithoutNavigation {

}

export interface ISigninScreenProps extends ISigninScreenPropsWithoutNavigation {
    navigationController: ISigninScreenNavigationController
}

export interface ISigninScreenState {
    emailInput: string
    passworInput: string
    error: string | undefined
}

export interface ISigninScreenNavigationController {
    onSigninSuccess(signinInput: ILoginInput): void
}
export interface ISigninScreen {
    signIn(input: ILoginInput): void
}