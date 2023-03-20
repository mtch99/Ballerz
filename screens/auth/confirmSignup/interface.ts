export default interface IConfirmSignupScreen {
    onPressConfirmSignup(): void;
}

export interface IConfirmSignupScreenState {
    confirmSignupInput: string
    error: undefined | string
}