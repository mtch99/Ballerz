import { IUserProfile } from '../types'
import * as types from './types'

export interface IUserData {
    email: string,
    deviceToken?: string,
    phoneNumber?: string,
    name?: string,
    address?: string,
    profile?: IUserProfile
}

export default interface IAuthUCI {
    signup(input: types.ISignupInput): Promise<types.ISignupResult>
    confirmSignup(input: types.IConfirmSignupInput): Promise<types.IConfirmSignupResult>
    login(signInInput: types.ILoginInput): Promise<types.ILoginResult>
    getLastLoginCreds(): Promise<types.ILoginInput | null>
    setListener(listener: IAuthModel): void
}


export interface IAuthModel {
    onNewRegisteredUserEvent(newUserData: types.ILoginInput): void; 
    onhNewLoggedInUserEvent(userData: types.UserBasicData): void
}


export interface IAuthRepository{
    confirmSignup(input: types.IConfirmSignupInput): Promise<types.IConfirmSignupResult>
    signup(signupCredsInterface: types.ISignupInput): Promise<types.ISignupResult>
    getLastLoginCreds(): Promise<types.ILoginInput | null>
    login(loginCreds: types.ILoginInput): Promise<types.ILoginResult>
    getCurrentUser(): Promise<types.UserBasicData | null>
    __storeLoginCreds(creds: types.ILoginInput): void
}