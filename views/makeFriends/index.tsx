import React from "react";
import SearchBarView from "./SearchBar";
import InviteYourFriendsFeedBackView from "../FeedBack/inviteYourFriends";
import BallerzSafeAreaView from "../safeArea";
import FindYourFriendsView from "../auth/findYourFriends";
import { SelectableUserProfileListView } from "../userProfileList/selectable";
import { View } from 'react-native'
import HeaderView from "../header";
import HeaderCheckButton from "../header/buttons/checkButton";
import HeaderTextButton from "../header/buttons/textButton";
import { IFindYourFriendsViewProps } from "../../screens/userProfileList/findYourFriends/interface";


export interface IMakeFriendsViewProps extends IFindYourFriendsViewProps {
    cancel(): void
}
export class MakeFriendsView extends FindYourFriendsView<IMakeFriendsViewProps>{



    componentDidMount(): void {
        console.log("MakeFriendsView: componentDidMount");
    }
    render(): React.ReactNode {
        return(
            <BallerzSafeAreaView
            >
                <View 
                    style = {{flex:1}}
                >
                    <HeaderView
                        title="Personnes"
                        rightButton={HeaderCheckButton}
                        rightButtonProps={{
                            onPress: this.props.onPressContinue
                        }}
                        leftButton={HeaderTextButton}
                        leftButtonProps={{
                            onPress: () => {this.props.cancel()},
                            // @ts-ignore
                            text: "annuler",
                        }}
                    />
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

