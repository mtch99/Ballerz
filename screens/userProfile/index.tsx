import React from "react";
import IUserProfileScreen, { IUserProfileListScreenNavigationController, IUserProfileScreenNavigationController } from "./interface";
import { View, Text } from "react-native";
import { AppContext, IAppContext } from "../../controllers/provider";
import { UserProfileView } from "../../views/userProfile";
import { IUserProfileState } from "../../app/features/types";
// import { UserProfileView } from "../../views/UserProfile";


export interface IUserProfileScreenPropsWithoutNavigation {
    userProfileId: string;
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
        badges: []
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
    
    addPicture(): void {
        throw new Error("Method not implemented.");
    }
    play(): void {
        throw new Error("Method not implemented.");
    }


    componentDidMount(): void {
        this.context.userProfileController.getUserProfile(this.props.userProfileId)
        this.setState((prevState) => {
            const UserProfile = this.context.userProfileMapState[this.props.userProfileId]
            return {
                ...prevState,
                ...UserProfile
        }})
    }

   


    render(): React.ReactNode {
        if(this.context.userProfileMapState[this.props.userProfileId]){
            console.warn("User profile")
            return( 
                <UserProfileView
                    {...this.context.userProfileMapState[this.props.userProfileId]}
                />
            )
        }
        return(
            <UserProfileView
                {...this.userProfile}
            />
        )
    }

} 

export class MyProfileScreen extends React.Component {
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    // componentDidMount(): void {
    //     this.context.userProfileController.
    // }



    render(): React.ReactNode {
        if(this.context.authState.profile){
            const userProfileId = this.context.authState.profile.id
            return(
                <UserProfileView
                    {...this.context.authState.profile}
                />
            )
        }
    }
}

export interface IUserProfileViewProps extends IUserProfileState{

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