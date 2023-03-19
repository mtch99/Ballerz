import { authUCI } from "./../../domain/use-cases/Auth/index";
import { ISignupInput, ISignupResult, IConfirmSignupInput, IConfirmSignupResult, ILoginInput, ILoginResult } from "../../domain/use-cases/Auth/types";
import IAuthController from "./interface";
import { IAuthModel } from "../../domain/use-cases/Auth/interface";



export default class AuthController implements IAuthController {

    private authUci = authUCI

    constructor(authModel: IAuthModel){
        this.authUci.setListener(authModel)
    }


    async login(email: string, password: string): Promise<ILoginResult> {
        const loginInput: ILoginInput = {
            email,
            password
        }
        return this.authUci.login(loginInput)
    }
    signup(input: ISignupInput): Promise<ISignupResult> {
        return this.authUci.signup(input)
    }
    
    confirmSignup(input: IConfirmSignupInput): Promise<IConfirmSignupResult> {
        return this.authUci.confirmSignup(input)
    }
    
}