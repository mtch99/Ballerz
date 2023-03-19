import { authUCI } from "./../../domain/use-cases/Auth/index";
import { ISignupInput, ISignupResult, IConfirmSignupInput, IConfirmSignupResult, ILoginInput, ILoginResult } from "../../domain/use-cases/Auth/types";
import IAuthController from "./interface";
import { IAuthModel } from "../../domain/use-cases/Auth/interface";



export default class AuthController implements IAuthController {

    private authUci = authUCI

    constructor(authModel: IAuthModel){
        this.authUci.setListener(authModel)
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