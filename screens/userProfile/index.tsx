import React from "react";
import IUserProfileScreen, { IUserProfileListScreenNavigationController, IUserProfileScreenNavigationController } from "./interface";
import { View, Text } from "react-native";
import { AppContext, IAppContext } from "../../controllers/provider";
import { UserProfileView } from "../../views/userProfile";
import { IUserProfileDataState, IUserProfileState } from "../../app/features/types";


export interface IUserProfileScreenPropsWithoutNavigation {
    userProfileData: IUserProfileDataState
}


export interface IUserProfileScreenProps extends IUserProfileScreenPropsWithoutNavigation{
    navigationController: IUserProfileScreenNavigationController
}

export interface IUserProfileScreenState extends IUserProfileState {

}


export class UserProfileScreen extends React.Component<IUserProfileScreenProps, IUserProfileScreenState> implements IUserProfileScreen {
    
    navigationController: IUserProfileScreenNavigationController;

    userProfile: IUserProfileState = {
        games: [],
        id: "",
        username: "",
        badges: [],
        isFriend: undefined,
        friends: []
    }
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext


    state = {
        ...this.userProfile
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


    onPressAddButton(item: IUserProfileState): void {
        const senderProfileID = this.context.authState.user?.profile?.id
        if(item.isFriend){
            return
        }
        if(!senderProfileID){
            throw new Error("No userProfile in auth state")
        }else {
            const input = {
                senderProfileID,
                receiverProfileID: item.id,
            }
            this.context.userProfileController.sendFriendShipRequest(input)
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


    render(): React.ReactNode {
        if(this.context.authState.profile){
            const userProfileId = this.context.authState.profile.id
            return(
                <UserProfileView
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


// export class UserProfileView extends React.Component<IUserProfileViewProps>{


//     componentDidMount(): void {
//         console.warn(`Mounting props: ${JSON.stringify(this.props)}`)
//     }

//     componentDidUpdate(prevProps: Readonly<IUserProfileViewProps>, prevState: Readonly<{}>, snapshot?: any): void {
//         console.warn(`UserProfileView newProps: ${JSON.stringify(this.props)})`)
//     }

//     render(): React.ReactNode {

//         // if(this.props.UserMap[this.props.userProfileId]){
//         //     return <></>
//         // }
//         return(
//             <View>
//                 <Text style={{color: 'white'}}>
//                     {this.props.name}
//                 </Text>
//             </View>
//         )
//     }
// }