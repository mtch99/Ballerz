export interface IConfirmSignupInput{
    email: string
    code: string
}
export interface IConfirmSignupResult {
    error: IConfirmSignupError | false
}

export interface IConfirmSignupError {
    code: number
    reason: ConfirmSignupErrorReason
}
export enum ConfirmSignupErrorReason {
    WRONG_CODE="WRONG_CODE"
}