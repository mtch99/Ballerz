import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { UserProfileListView } from "../../../views/userProfileList";
import { IUserProfileData } from "../../../domain/use-cases/types";
import { IUserProfileListScreenNavigationController } from "../../userProfile/interface";




export interface IUserProfileListScreenPropsWithoutNavigation {
    userProfileList: IUserProfileData[]
}


export interface IUserProfileListScreenProps extends IUserProfileListScreenPropsWithoutNavigation{
    navigationController: IUserProfileListScreenNavigationController
}


export default class UserProfileListScreen extends React.Component<IUserProfileListScreenProps>{

    constructor(props: IUserProfileListScreenProps) {
        super(props);
    }

    onPressUserProfile(id: string){
        this.props.navigationController.goToUserProfile(id)
    }


    render(): React.ReactNode {
        return(
            <SafeAreaView>
                {this.props.userProfileList.length > 0?(
                    <UserProfileListView
                        userProfileList={{items: this.props.userProfileList}}
                        onPressUserProfile={this.onPressUserProfile}
                    />

                ):(
                    <></>
                )}
            </SafeAreaView>
        )
    }
}