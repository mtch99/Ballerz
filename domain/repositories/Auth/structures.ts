export type ISignupCreds = {
    email: string,
    password: string,
    additionalUserData?: AdditionalUserData
}

export interface AdditionalUserData {
    phoneNumber?: string,
    address?: string,
    country?: string,
    city?: string,
}

export type SignUpResultInterface = {
    error: false | SignupErrorInterface
    email: string
}

export type SignupErrorInterface = {
    message: string;
    reason: SignupErrorReason
}

export enum SignupErrorReason {
    emailAlreadyExists,
    serverError
}



// confirmSignup
export type ConfirmSignupInputInterface = {
    email: string
    confirmationCode: string
}

export type ConfirmSignupResponseInterface = {
    error: null | ConfirmSignupErrorInterface
    success: boolean
}

export type ConfirmSignupErrorInterface = {
    reason: ConfirmSignupErrorReason
    message: string
}

export enum ConfirmSignupErrorReason {
    wrongCode
}



// login
export type LoginInputInterface = {
    email: string,
    password: string
}

export type LoginResponseInterface = {
    error: LoginError | null,
}

export type LoginError = {
    reason: LoginErrorReason
    message: string
}

export enum LoginErrorReason {
    unregisteredEmail,
    wrongPassword,
}



// forgotPassword
export type ForgotPasswordResponseInterface = {
    error: ForgotPasswordError | null
    message: string
}

export type ForgotPasswordError = {
    message: string
    reason: ForgotPasswordRejectionReason
}

export enum ForgotPasswordRejectionReason {
    unregisteredEmail,
}