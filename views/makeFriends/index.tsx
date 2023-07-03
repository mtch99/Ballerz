import React from "react";
import SearchBarView from "./SearchBar";
import InviteYourFriendsFeedBackView from "../FeedBack/inviteYourFriends";
import BallerzSafeAreaView from "../safeArea";
import FindYourFriendsView from "../auth/findYourFriends";
import { SelectableUserProfileListView } from "../userProfile/userProfileList/selectable";
import { View } from 'react-native'
import BallerzHeaderView from "../../components/header";
import HeaderCheckButton from "../../components/header/buttons/checkButton";
import BalerzHeaderTextButton from "../../components/header/buttons/textButton";
import { IFindYourFriendsViewProps } from "../../screens/user/userProfileList/findYourFriends/interface";


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
                    <BallerzHeaderView
                        title="Personnes"
                        rightButton={HeaderCheckButton}
                        rightButtonProps={{
                            onPress: this.props.onPressContinue
                        }}
                        leftButton={BalerzHeaderTextButton}
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

