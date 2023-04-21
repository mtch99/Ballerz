import React from 'react';
import { IDefineUsernameScreenProps, IDefineUsernameScreenState} from './interface';
import { AppContext, IAppContext } from '../../../controllers/provider';
import { IDefineUsernameInput, IDefineUsernameResult } from '../../../domain/use-cases/auth/interface';
import { DefineUsernameView } from '../../../views/auth/defineUsername';
import { Screen } from '../../interface';
import { fetchImageFromUri, getAssetUri, pickImage } from '../../utils/ImagePicker';
import { ImagePickerResult } from 'expo-image-picker';

const defaultImageAsset = require("../../../assets/profilePic.jpg")
export default class DefineUsernameScreen extends Screen<IDefineUsernameScreenProps, IDefineUsernameScreenState> {

    state: IDefineUsernameScreenState = {
        usernameInput: "",
        error: undefined,
        profilePicSource: defaultImageAsset,
        loading: false
    }
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext


    constructor(props: IDefineUsernameScreenProps){
        super(props)
        this.defineUsername = this.defineUsername.bind(this)
        this.onUsernameInputChange = this.onUsernameInputChange.bind(this)
    }


    async defineUsername(): Promise<IDefineUsernameResult>{
        if(!this.context.authState.user){
            throw new Error("user (from authState) is undefined")
        } else {
            const input: IDefineUsernameInput = {
                email: this.context.authState.user.email,
                username: this.state.usernameInput
            }
            const response = await this.context.userProfileController.defineUsername(input)
            return response
        }
    }




    private handleDefineUsernameResponse(response: IDefineUsernameResult): void {
        if(!response.error && response.userProfile){
            this.props.navigationController.goToFindYourFriendsScreen()
        }
    }

    private onPressProfilePic(): void {
        this.makeRequest(pickImage(this.handleImagepicked.bind(this)))
    }

    private async handleImagepicked(result: ImagePickerResult): Promise<void>{
        const uri = await getAssetUri(result)
        if(uri){
            this.setState((prevState) => ({
                ...prevState,
                profilePicSource: {uri}
            }))
        }
    }

    async onPressContinue(): Promise<void>{
        this.makeRequest(this.__onPressContinue())
    }

    private async __onPressContinue(): Promise<void> {
        const defineUsernameResult = await this.defineUsername()
        if(defineUsernameResult.error || !defineUsernameResult.userProfile){
            this.setState((prevState) => ({
                ...prevState,
                error: "Problème de connexion. Veuillez réessayer"
            }))
        }
        else {
            if(this.state.profilePicSource != defaultImageAsset){
                const pickedImage = await fetchImageFromUri(this.state.profilePicSource.toString())
                await this.uploadProfilePic(defineUsernameResult.userProfile.id, pickedImage)
            }
            this.props.navigationController.goToFindYourFriendsScreen()
        }
    }

    async uploadProfilePic(userProfileID: string, image: Blob): Promise<void> {
        this.context.userProfileController.uploadProfilePic({
            image,
            userProfileID
        })
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
                profilePicSource={this.state.profilePicSource}
                onPressProfilePic={this.onPressProfilePic.bind(this)}
                onPressConfirm={this.defineUsername}
                onUsernameInputChange={this.onUsernameInputChange}
                error={this.state.error}

            />
        )
    }



}


