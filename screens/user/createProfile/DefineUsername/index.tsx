import React from 'react';
import { Image } from 'react-native';
import { AppContext, IAppContext } from '../../../../controllers/provider';
import { IDefineUsernameInput, IDefineUsernameResult } from '../../../../domain/use-cases/auth/interface';
import { DefineUsernameView } from '../../../../views/auth/defineUsername';
import { Screen } from '../../../interface';
import { fetchImageFromUri, getAssetUri, pickImage } from '../../../utils/ImagePicker';
import { ImagePickerResult } from 'expo-image-picker';
import { IDefineUsernameScreenProps, IDefineUsernameScreenState } from './interface';

const defaultProfilePicSource = require("../../../../assets/blank-pp.jpg")

export default class DefineUsernameScreen extends Screen<IDefineUsernameScreenProps, IDefineUsernameScreenState> {

    state: IDefineUsernameScreenState = {
        usernameInput: "",
        error: undefined,
        profilePicSource: defaultProfilePicSource,
        loading: false
    }
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext


    constructor(props: IDefineUsernameScreenProps){
        super(props)
    }


    async defineUsername(): Promise<IDefineUsernameResult>{
        if(!this.context.authState.user){
            throw new Error("No logged In user")
        } else {
            const input: IDefineUsernameInput = {
                email: this.context.authState.user.email,
                username: this.state.usernameInput
            }
            const response = await this.context.userProfileController.defineUsername(input)
            return response
        }
    }


    private onPressProfilePic(): void {
        //this.makeRequest(pickImage(this.handleImagepicked.bind(this)))
        pickImage(this.handleImagepicked.bind(this))
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
            await this.uploadProfilePic(defineUsernameResult.userProfile.id)
            this.props.navigationController.goToFindYourFriendsScreen()
        }
    }


    async uploadProfilePic(userProfileID: string): Promise<void> {
        let profilePic: Blob
        if(this.state.profilePicSource != defaultProfilePicSource){
            // @ts-ignore
            profilePic = await fetchImageFromUri(this.state.profilePicSource.uri)
        } else {
            const defaultProfilePicUri = Image.resolveAssetSource(defaultProfilePicSource).uri
            profilePic = await fetchImageFromUri(defaultProfilePicUri)
        }
        await this.context.userProfileController.uploadProfilePic({
            image: profilePic,
            userProfileID
        }).then(res => {
            if(res.error){
                console.warn(`Error while uploading profile pic`)
            }
        })
        return;
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
                onPressConfirm={this.onPressContinue.bind(this)}
                onUsernameInputChange={this.onUsernameInputChange.bind(this)}
                error={this.state.error}
                loading={this.state.loading}
            />
        )
    }
}


