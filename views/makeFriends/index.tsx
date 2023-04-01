import React from "react";
import SearchBarView from "./SearchBar";
import InviteYourFriendsFeedBackView from "../teachingFeedBack/inviteYourFriends";
import BallerzSafeAreaView from "../safeArea";
import FindYourFriendsView from "../auth/findYourFriends";
import { SelectableUserProfileListView } from "../userProfileList/selectable";


export class MakeFriendsView extends FindYourFriendsView{




    render(): React.ReactNode {
        return(
            <BallerzSafeAreaView
            >
                <>
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
                </>
            </BallerzSafeAreaView>
        )
    }
}