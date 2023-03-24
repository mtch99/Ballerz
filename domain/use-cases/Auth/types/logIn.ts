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
    UNREGISTERED_EMAIL="UNREGISTERED_EMAIL",
    WRONG_PASSWORD="WRONG_PASSWORD",
    USER_NOT_CONFIRMED="USER_NOT_CONFIRMED"
}