import React from 'react';
import { IDefineUsernameScreenProps, IDefineUsernameScreenState} from './interface';
import { AppContext, IAppContext } from '../../../controllers/provider';
import { IDefineUsernameInput, IDefineUsernameResult } from '../../../domain/use-cases/auth/interface';
import { DefineUsernameView } from '../../../views/auth/defineUsername';


export default class DefineUsernameScreen extends React.Component<IDefineUsernameScreenProps, IDefineUsernameScreenState> {

    state: IDefineUsernameScreenState = {
        usernameInput: "",
        error: undefined
    }
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    constructor(props: IDefineUsernameScreenProps){
        super(props)
        this.defineUsername = this.defineUsername.bind(this)
        this.onUsernameInputChange = this.onUsernameInputChange.bind(this)
    }


    async defineUsername(): Promise<void>{
        if(!this.context.authState.user){
            throw new Error("user (from authState) is undefined")
        } else {
            const input: IDefineUsernameInput = {
                email: this.context.authState.user.email,
                username: this.state.usernameInput
            }

            const response = await this.context.userProfileController.defineUsername(input)
            this.handleDefineUsernameResponse(response)
        }

    }

    private handleDefineUsernameResponse(response: IDefineUsernameResult): void {
        if(!response.error && response.userProfile){
            this.props.navigationController.goToFindYourFriendsScreen()
        }
    }

    onUsernameInputChange(input: string) {
        this.setState((prevState) => ({
            ...prevState,
            usernameInput: input
        }))
    }


    render(): React.ReactNode {
        return (
            <DefineUsernameView
                onPressConfirm={this.defineUsername}
                onUsernameInputChange={this.onUsernameInputChange}
                error={this.state.error}
            />
        )
    }



}


