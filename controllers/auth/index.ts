import AuthUCI from "../../domain/use-cases/Auth";
import { ISignupInput, ISignupResult, IConfirmSignupInput, IConfirmSignupResult, ILoginInput, ILoginResult } from "../../domain/use-cases/Auth/types";
import IAuthController from "./interface";
import IAuthUCI, { IAuthModel, IDefineUsernameInput, IDefineUsernameResult } from "../../domain/use-cases/Auth/interface";



export default class AuthController implements IAuthController {

    private authUci: IAuthUCI 

    constructor(authModel: IAuthModel){
        this.authUci = new AuthUCI(authModel)
    }
    
    signinLastUser(): Promise<false | ILoginResult> {
        return this.authUci.signinLastUser();
    }


    async login(input: ILoginInput): Promise<ILoginResult> {
        return this.authUci.login(input)
    }
    signup(input: ISignupInput): Promise<ISignupResult> {
        return this.authUci.signup(input)
    }
    
    confirmSignup(input: IConfirmSignupInput): Promise<IConfirmSignupResult> {
        return this.authUci.confirmSignup(input)
    }
    
}