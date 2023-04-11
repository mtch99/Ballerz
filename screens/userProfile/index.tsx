import React from "react";
import IUserProfileScreen, { IUserProfileScreenNavigationController } from "./interface";
import { View, Text } from "react-native";
import { AppContext, IAppContext } from "../../controllers/provider";
import { MyProfileView, UserProfileView } from "../../views/userProfile";
import { IUserProfileDataState, IUserProfileState } from "../../app/features/types";
import { IScreenState } from "../interface";
import { Screen } from "../interface";


export interface IUserProfileScreenPropsWithoutNavigation {
    userProfileData: IUserProfileDataState
}


export interface IUserProfileScreenProps extends IUserProfileScreenPropsWithoutNavigation{
    navigationController: IUserProfileScreenNavigationController
}

export interface IUserProfileScreenState extends IUserProfileState, IScreenState {

}


export class UserProfileScreen extends Screen<IUserProfileScreenProps, IUserProfileScreenState> implements IUserProfileScreen {
    
    navigationController: IUserProfileScreenNavigationController;

    userProfile: IUserProfileState = {
        games: [],
        id: this.props.userProfileData.id,
        username: this.props.userProfileData.username,
        badges: [],
        isFriend: undefined,
        friends: [],
    }
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext


    state = {
        ...this.userProfile,
        loading: false
    }

    constructor(props: IUserProfileScreenProps){
        super(props);
        this.navigationController = this.props.navigationController
    }


    onPressFriendsNumber(){
        const userProfile = this.context.userProfileMapState[this.props.userProfileData.id] as IUserProfileState | undefined
        if(userProfile!== undefined){
            this.props.navigationController.goToFriendsListScreen(userProfile.friends)
        }
    }
    

    addPicture(): void {
        throw new Error("Method not implemented.");
    }
    play(): void {
        throw new Error("Method not implemented.");
    }


    async onPressAddButton(userProfile: IUserProfileState): Promise<void> {
        console.error(`${JSON.stringify(this.context.authState)}`)
        const senderProfileID = this.context.authState.profile?.id
        if(userProfile.isFriend){
            return
        }
        if(!senderProfileID){
            throw new Error("No userProfile in auth state")
        }else {
            const input = {
                senderProfileID,
                receiverProfileID: userProfile.id,
            }
            const request = this.context.userProfileController.sendFriendShipRequest(input)
            await this.makeRequest(request)
        }
    }


    componentDidMount(): void {
        const userProfileID = this.props.userProfileData.id
        this.context.userProfileController.getUserProfile(userProfileID)
    }


    render(): React.ReactNode {
        console.log(`\nUserProfileScreen.render()\n userProfileMapState: ${JSON.stringify(this.context.userProfileMapState, null, 2)}\n userProfile`)
        const userProfile = this.context.userProfileMapState[this.props.userProfileData.id] as IUserProfileState | undefined
        if(userProfile){
            return( 
                <UserProfileView
                    {...userProfile}
                    onPressAddButton={this.onPressAddButton.bind(this)}
                    onPressFriendsNumber={this.onPressFriendsNumber.bind(this)}
                />
            )
        }
        return(
            <UserProfileView
                {...this.userProfile}
                onPressAddButton={this.onPressAddButton.bind(this)}
                onPressFriendsNumber={this.onPressFriendsNumber.bind(this)}
            />
        )
    }

} 


export class MyProfileScreen extends React.Component {
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    // Effect is run on navigation wrapper
    componentDidMount(): void {}

    render(): React.ReactNode {
        if(this.context.authState.profile){
            return(
                <MyProfileView
                    {
                        ...this.context.authState.profile
                    }
                    onPressAddButton={() => {}}
                    onPressFriendsNumber={() => {}}
                />
            )
        }
    }
}

export interface IUserProfileViewProps extends IUserProfileState{
    onPressAddButton: (item: IUserProfileState) => void;
    onPressFriendsNumber: () => void;
}