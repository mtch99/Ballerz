export type ISignupInput = {
    email: string,
    password: string,
    confirmPassword: string
    additionalUserData: AdditionalUserData
}

export interface AdditionalUserData {
    phoneNumber?: string
}


export interface ISignupResult {
    error: false | ISignupRejection
    newUserData?: UserBasicData
}


export enum RepoSignupErrorReason {
    EMAIL_ALREADY_EXISTS= "EMAIL_ALREADY_EXISTS",
    SERVER_ERROR="SERVER_ERROR"
}

export type UserBasicData = {
    email: string,
    additionalUserData?: AdditionalUserData
}

export type ISignupRejection = {
    reason: SignupErrorReason
    description: string
}

export type SignupErrorReason = EmailValidationRejectionReason | PasswordFormatValidationRejectionReason
        | ConfirmPasswordRejectionReason | RepoSignupErrorReason



export interface EmailValidationRejection extends ISignupRejection {
    reason: EmailValidationRejectionReason
    description: string
}

export enum EmailValidationRejectionReason {
    badFormat="badFormat",
}

export interface PasswordValidationRejection extends ISignupRejection {
    reason: PasswordFormatValidationRejectionReason
}

export enum PasswordFormatValidationRejectionReason {
    passwordLengthLowerThanEight,
}

export interface ConfirmPasswordRejection extends ISignupRejection  {
    reason: ConfirmPasswordRejectionReason
}

export enum ConfirmPasswordRejectionReason {
    mismatchedPasswords="MISMATCHEDPASSWORDS"
}