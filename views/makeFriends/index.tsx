import React from "react";
import SearchBarView from "./SearchBar";
import InviteYourFriendsFeedBackView from "../teachingFeedBack/inviteYourFriends";
import BallerzSafeAreaView from "../safeArea";
import FindYourFriendsView from "../auth/findYourFriends";
import { SelectableUserProfileListView } from "../userProfileList/selectable";
import { View } from 'react-native'


export class MakeFriendsView extends FindYourFriendsView{


    render(): React.ReactNode {
        return(
            <BallerzSafeAreaView
            >
                <View 
                    style = {{flex:1}}
                >
                    <SearchBarView
                      onSearchInputChange={this.props.onFilterInputChange}
                    />
                    <InviteYourFriendsFeedBackView
                        onPressInvitationLink={this.onPressInvitationLink}
                    />
                    <SelectableUserProfileListView
                        onPressUserProfile={this.props.onPressUserProfile}
                        usersList={this.props.usersList}
                    />
                </View>
            </BallerzSafeAreaView>
        )
    }
}