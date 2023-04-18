import { IDefineUsernameInput, IDefineUsernameResult } from "../../domain/use-cases/auth/interface";
import * as types from "../../domain/use-cases/auth/types"

export default interface IAuthController {
    login(input: types.ILoginInput): Promise<types.ILoginResult>
    signup(input: types.ISignupInput): Promise<types.ISignupResult>
    confirmSignup(input: types.IConfirmSignupInput): Promise<types.IConfirmSignupResult>
    signinLastUser(): Promise<types.ILoginResult| false>
    isFirstLaunch(): Promise<boolean>
}



export interface IILoginResult extends types.ILoginResult{}



