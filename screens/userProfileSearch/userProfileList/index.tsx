import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import {IUserProfileData } from "../../../app/features/feed/slice/interface";
import { UserProfileListView } from "../../../views/userProfile/userProfileList";


export interface IUserProfileListScreenPropsWithoutNavigation {
    userProfileList: IUserProfileData[]
}


export interface IUserProfileListScreenProps extends IUserProfileListScreenPropsWithoutNavigation{
    
}


export default class UserProfileListScreen extends React.Component<IUserProfileListScreenProps>{

    constructor(props: IUserProfileListScreenProps) {
        super(props);
    }

    onPressUserProfile(id: string){
        throw new Error("Method not implemented")
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