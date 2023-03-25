import React from "react";
import { IFindYourFriendsViewProps } from "../../../screens/createProfile/findYourFriends/interface";
import { SafeAreaView } from "react-native-safe-area-context";
import {SelectableUserProfileListView} from "../../userProfileList/selectable";


export default class FindYourFriendsView extends React.Component<IFindYourFriendsViewProps>{
    

    render(): React.ReactNode {
        return(
            <SafeAreaView>
                <SelectableUserProfileListView
                    onSelectItem={this.props.onSelectItem}
                    usersList={this.props.usersList}
                />
            </SafeAreaView>
        )
    }
}