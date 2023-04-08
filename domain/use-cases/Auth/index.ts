import { TouchableHighlightBase } from "react-native"

import IAuthUCI, {IAuthUCIEventListener, IAuthRepository, IDefineUsernameInput, IDefineUsernameResult} from "./interface"
import { ThemeProvider } from "@react-navigation/native";
import * as types from "./types"
import { AuthRepository } from "../../repositories/Auth";



/**
 * Execute Authentication tasks
 * Contains a AuthRepository that interacts with the infrastructure
 * The Auth Repository complies to the UseCase's I/O structure
 */
export default class AuthUCI implements IAuthUCI {

    private repo: IAuthRepository
    
    private observer: IAuthUCIEventListener
    
    constructor(observer: IAuthUCIEventListener, authRepo?: IAuthRepository){
        this.repo = authRepo || new AuthRepository(); 
        this.observer = observer;
    }



    async signinLastUser(): Promise<types.ILoginResult | false> {
        const lastLoginCreds = await this.repo.getLastLoginCreds()
        console.log("last login credentials: " + JSON.stringify(lastLoginCreds))
        if(lastLoginCreds){
            const res = await this.login(lastLoginCreds)
            return res
        } else {
            return false
        }
    }
    
    
    async confirmSignup(input: types.IConfirmSignupInput): Promise<types.IConfirmSignupResult> {
        return this.repo.confirmSignup(input);
    }


    async signup(input: types.ISignupInput): Promise<types.ISignupResult>{
        this.observer.onNewSignupAttempt(input)
        console.warn(`SIgnup function input: ${JSON.stringify(input)}`)
        const {email, password, confirmPassword} = input

        let result: types.ISignupResult  = {
            error: false,
        }
        
        // EmailPassword Validation
        const emailPasswordValidation = this.__validateEmailAndPassword(email, password, confirmPassword)
        if(emailPasswordValidation != true){
            result.error = emailPasswordValidation;
            return result;
        }

        result = await this.repo.signup(input);
        

        if(!result.error){
            this.__emitNewRegisteredUserEvent(input)
            this.__emitNewLoggedInUserEvent({email: input.email})
        }

        return result;
    }


    /**
     * Dispatch userChangeEvent
     * @param input 
     * @returns 
     */
    async login(input: types.ILoginInput): Promise<types.ILoginResult>{
        this.observer.onNewLoginAttempt(input)
        const result = await this.repo.login(input);
        if(result.user){
            this.__emitNewLoggedInUserEvent(result.user)
        }
        return result
    }


    private __emitNewRegisteredUserEvent(signupInput: types.ISignupInput): void{  
            const payload: types.ILoginInput = {
                email: signupInput.email,
                password: signupInput.password
            }
            this.observer.onNewRegisteredUserEvent(payload);
    }


    private __emitNewLoggedInUserEvent(userData: types.UserBasicData): void{
        this.observer.onhNewUserLoggedInEvent(userData);
    }
    

    getLastLoginCreds(): Promise<types.ILoginInput | null>{        
        return this.repo.getLastLoginCreds()
    }


    private __validateEmailAndPassword(email: string, password: string, confirmPassword: string): true | types.EmailValidationRejection 
        | types.PasswordValidationRejection | types.ConfirmPasswordRejection {
        
        let result: true | types.EmailValidationRejection 
            | types.PasswordValidationRejection | types.ConfirmPasswordRejection =  this.__validateEmail(email);
        
        
        if(result != true){
            return result
        }
        
        result = this.__validatePassword(password)  
        if(result != true){
            return result
        }
        result = this.__confirmPassword(password, confirmPassword)
        if(result != true){
            return result
        }

        return true;

    }


    /**
     * Check that the password input matches the confirmPassword input
     * @param password 
     * @param confirmPassword 
     * @returns 
     */
    private __confirmPassword(password: string, confirmPassword: string): true | types.ConfirmPasswordRejection{
        let result: true | types.ConfirmPasswordRejection = true;
        if(password != confirmPassword){
            result = {
                reason: types.ConfirmPasswordRejectionReason.mismatchedPasswords,
                description: "Vérifiez que les deux mots de passe sont identiques"
            }
        }

        return result;
    }


    /**
     * Check that the password input format respects de PasswordStrategy
     * @param password 
     * @returns 
     */
    private __validatePassword(password: string): true | types.PasswordValidationRejection {
        return PasswordStrategy.validate(password)
    } 


    /**
     * Check that the email input is in an emial format
     * @param password 
     * @returns 
     */
    private __validateEmail(email: string): true | types.EmailValidationRejection{
        return EmailStrategy.validate(email);
    }


}



// ----------------------- Validation Startegies



class PasswordStrategy {

    static validate(password: string): true | types.PasswordValidationRejection {
        let result: true|types.PasswordValidationRejection = true
        if(password.length < 8){
            result = {
                reason: types.PasswordFormatValidationRejectionReason.passwordLengthLowerThanEight,
                description: `Le mot de passe doit cotenir au moins 8 charactères`
            }
            return result
        }
        return result;
    }
}


class EmailStrategy {

    static _validationRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    static validate(email: string): true | types.EmailValidationRejection {
        let result: true | types.EmailValidationRejection
        if(email.match(this._validationRegex)){
            result = true
        } else {
            result = {
                reason: types.EmailValidationRejectionReason.badFormat,
                description: "Veuillez entrer une adresse courriel valide"
            }
        }

        return result
    }
}


// TODO: Create Factory for AuthUCI



// export const authUCI = new AuthUCI(new AuthRepository())