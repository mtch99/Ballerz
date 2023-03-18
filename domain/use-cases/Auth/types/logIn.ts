import { IUserData } from "../interface"

export interface ILoginInput {
    email: string,
    password: string
}


export interface ILoginResult {
    error: false | ILoginRejection
    user?: IUserData
}


export type ILoginRejection = {
    reason: LoginErrorReason
    description: string
}


export enum LoginErrorReason {
    unregisteredEmail="UNREGISTERED_EMAIL",
    wrongEmailOrPassword="WRONG_EMAIL_OR_PASSWORD"
}