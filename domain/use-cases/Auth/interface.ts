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
    login(signInInput: types.ILoginInput): Promise<types.ILoginResult>
    getLastLoginCreds(): Promise<types.ILoginInput | null>
    setListener(listener: IAuthEventDispatcher): void
}


export interface IAuthEventDispatcher {
    dispatchNewRegisteredUserEvent(newUserData: types.ILoginInput): void; 
    dispatchNewLoggedInUserEvent(userData: types.UserData): void
}


export interface IAuthRepository{
    signup(signupCredsInterface: types.ISignupInput): Promise<types.ISignupResult>
    getLastLoginCreds(): Promise<types.ILoginInput | null>
    login(loginCreds: types.ILoginInput): Promise<types.ILoginResult>
    getCurrentUser(): Promise<types.UserData | null>
    __storeLoginCreds(creds: types.ILoginInput): void
}