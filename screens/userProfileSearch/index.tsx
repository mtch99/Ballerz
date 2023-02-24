import React from "react";
import { IUserProfileListState } from "../../app/features/userProfile/slice/interface";
import { IUserProfileSearchScreen } from "./interface";
import { AppContext, IAppContext } from "../../controllers/provider";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import { UserProfileListView } from "../../views/userProfileList";


export interface IUserProfileSearchScreenProps{}

export default class UserProfileSearchScreen extends React.Component implements IUserProfileSearchScreen {

    userProfileList: IUserProfileListState = {items: []};

    constructor(props: IUserProfileSearchScreenProps){
        super(props);
    }

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    componentDidMount(): void {
        this.context.userProfileController.getAllUserProfiles()
    }


    render(): React.ReactNode {
        return(
            <UserProfileListView
                userProfileList={this.context.userProfileListState}
            />
        )
    }
}