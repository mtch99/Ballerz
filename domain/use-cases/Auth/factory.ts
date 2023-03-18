import AuthUCI from ".";
import { AuthRepository } from "../../repositories/Auth";

export default class AuthUCIFactory {

    static newAuthUCI(): AuthUCI{
        return new AuthUCI(new AuthRepository());
    }
}