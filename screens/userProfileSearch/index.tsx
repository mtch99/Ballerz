import React from "react";
import { IUserProfileListState, IUserProfileState } from "../../app/features/userProfile/slice/interface";
import { IUserProfileSearchScreen } from "./interface";
import { AppContext, IAppContext } from "../../controllers/provider";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import { UserProfileListView } from "../../views/userProfile/userProfileList";


export interface IUserProfileSearchScreenProps{}

export default class UserProfileSearchScreen extends React.Component implements IUserProfileSearchScreen {

    userProfileList: IUserProfileListState = {items: []};
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    constructor(props: IUserProfileSearchScreenProps){
        super(props);
    }

    onPressUserProfile(id: string): void {
        throw new Error("Method not implemented.");
    }


    componentDidMount(): void {
        this.context.userProfileController.getAllUserProfiles()
    }


    render(): React.ReactNode {
        return(
            <UserProfileListView
                userProfileList={this.context.userProfileListState}
                onPressUserProfile={this.onPressUserProfile}
            />
        )
    }
}