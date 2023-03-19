import { TouchableHighlightBase } from "react-native"
import {AuthRepository} from "../../repositories/Auth"
import IAuthUCI, {IAuthModel, IAuthRepository} from "./interface"
import * as types from './types'



/**
 * Execute Authentication tasks
 * Contains a AuthRepository that interacts with the infrastructure
 * The Auth Repository complies to the UseCase's I/O structure
 */
export default class AuthUCI implements IAuthUCI {

    
    private _repo: IAuthRepository;
    private _listener: IAuthModel | undefined = undefined

    constructor(repo: IAuthRepository){
        this._repo = repo
    }


    async confirmSignup(input: types.IConfirmSignupInput): Promise<types.IConfirmSignupResult> {
        return this._repo.confirmSignup(input)
    }


    async signup(input: types.ISignupInput): Promise<types.ISignupResult>{
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

        result = await this._repo.signup(input);
        
        if(result.error === false){
            this.__emitNewRegisteredUserEvent(input)
        }

        return result;
    }


    /**
     * Dispatch userChangeEvent
     * @param input 
     * @returns 
     */
    async login(input: types.ILoginInput): Promise<types.ILoginResult>{
        const result = await this._repo.login(input);
        if(result.user){
            this.__emitNewLoggedInUserEvent(result.user)
        }
        return result
    }


    setListener(listener: IAuthModel): void {
        this._listener = listener 
    }





    private __emitNewRegisteredUserEvent(signupInput: types.ISignupInput): void{  
        if(this._listener != undefined){
            const payload: types.ILoginInput = {
                email: signupInput.email,
                password: signupInput.password
            };
            this._listener.onNewRegisteredUserEvent(payload);
        }
    }


    private __emitNewLoggedInUserEvent(userData: types.UserBasicData): void{
        if(this._listener){
            this._listener.onhNewLoggedInUserEvent(userData);
        }
    }

    getLastLoginCreds(): Promise<types.ILoginInput | null>{        
        return this._repo.getLastLoginCreds()
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
                description: "mismatched passwords"
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
                description: "Password must be at least 8 charachters long"
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
                description: "Invalid email format"
            }
        }

        return result
    }
}


// TODO: Create Factory for AuthUCI


export const authUCI = new AuthUCI(new AuthRepository())