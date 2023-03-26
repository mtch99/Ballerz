import React from "react";
import { IUserProfileListState} from "../../app/features/userProfile/userProfileList/slice/interface";
import { IUserProfileSearchScreen } from "./interface";
import { AppContext, IAppContext } from "../../controllers/provider";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import { UserProfileListView } from "../../views/userProfileList";
import { IUserProfileListScreenNavigationController } from "../userProfile/interface";


export interface IUserProfileSearchScreenPropsWithoutNavigation{}

export interface IUserProfileSearchScreenProps extends IUserProfileSearchScreenPropsWithoutNavigation{
    navigationController: IUserProfileListScreenNavigationController
}

export default class UserProfileSearchScreen extends React.Component<IUserProfileSearchScreenProps> implements IUserProfileSearchScreen {

    userProfileList: IUserProfileListState = {items: []};
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    constructor(props: IUserProfileSearchScreenProps){
        super(props);
        this.onPressUserProfile = this.onPressUserProfile.bind(this)
    }


    onPressUserProfile(id: string): void {
        this.props.navigationController.goToUserProfile(id)
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