import { IDefineUsernameInput, IDefineUsernameResult } from "./../../domain/use-cases/Auth/interface";
import * as types from "../../domain/use-cases/Auth/types"

export default interface IAuthController {
    login(input: types.ILoginInput): Promise<types.ILoginResult>
    signup(input: types.ISignupInput): Promise<types.ISignupResult>
    confirmSignup(input: types.IConfirmSignupInput): Promise<types.IConfirmSignupResult>
    defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult>
}

export interface IILoginResult extends types.ILoginResult{}



