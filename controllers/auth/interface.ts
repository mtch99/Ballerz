import * as types from "../../domain/use-cases/Auth/types"

export default interface IAuthController {
    login(input: types.ILoginInput): Promise<types.ILoginResult>
    signup(input: types.ISignupInput): Promise<types.ISignupResult>
    confirmSignup(input: types.IConfirmSignupInput): Promise<types.IConfirmSignupResult>
}

export interface IILoginResult extends types.ILoginResult{}



