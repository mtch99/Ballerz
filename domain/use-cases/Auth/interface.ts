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
    defineUsername(input: IDefineUsernameInput): Promise<IDefineUsernameResult>
}


export interface IDefineUsernameInput {
    email: string
    username: string
}

export interface IDefineUsernameResult {
    error: boolean
    userProfile?: IUserProfile
}


export interface IAuthModel {
    onNewRegisteredUserEvent(newUserData: types.ILoginInput): void; 
    onNewSignupAttempt(input: types.ISignupInput): void;
    onNewLoginAttempt(input: types.ILoginInput): void;
    onhNewUserLoggedInEvent(userData: types.UserBasicData): void
    onUsernameDefinedEvent(userProfile: IUserProfile): void
}


export interface IAuthRepository{
    confirmSignup(input: types.IConfirmSignupInput): Promise<types.IConfirmSignupResult>
    signup(signupCredsInterface: types.ISignupInput): Promise<types.ISignupResult>
    getLastLoginCreds(): Promise<types.ILoginInput | null>
    getLastSignupCreds(): Promise<types.ISignupInput | null>
    login(loginCreds: types.ILoginInput): Promise<types.ILoginResult>
    getCurrentUser(): Promise<types.UserBasicData | null>
    __storeLoginCreds(creds: types.ILoginInput): void
    __storeSignupCreds(creds: types.ISignupInput): void
}