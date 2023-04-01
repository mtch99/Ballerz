import React from "react";
import { IFindYourFriendsViewProps } from "../../../screens/userProfileList/findYourFriends/interface";
import {SelectableUserProfileListView, UserProfileItemView} from "../../userProfileList/selectable";
import HeaderView from "../../header";
import HeaderCheckButton from "../../header/buttons/checkButton"
import { globalStyles } from "../../styles";
import { Alert, Share, StyleSheet, View } from "react-native";
import InviteYourFriendsFeedBackView from "../../FeedBack/inviteYourFriends";
import SearchBarView from "../../makeFriends/SearchBar";
import BallerzSafeAreaView from "../../safeArea";


export default class FindYourFriendsView<P extends IFindYourFriendsViewProps = IFindYourFriendsViewProps> extends React.Component<P>{

    constructor(props: P) {
        super(props);
        this.onPressInvitationLink = this.onPressInvitationLink.bind(this);
    }

    
    async onPressInvitationLink(): Promise<void> {
        try {
            const result = await Share.share({
              message:'https://testflight.apple.com/join/6GBFVtwg',
			  title: "https://testflight.apple.com/join/6GBFVtwg",
			  url: "https://testflight.apple.com/join/6GBFVtwg"
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error: any) {
            Alert.alert(error.message);
          }
    }

    render(): React.ReactNode {
        return(
            <BallerzSafeAreaView
            >
                <View style={{flex:1}}>
                <HeaderView
                    title="Trouve tes amis"
                    rightButton={HeaderCheckButton}
                    leftButtonProps={{onPress: () => {}}}
                    rightButtonProps={{onPress: this.props.onPressContinue}}
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


const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.global.screenBackGroundColor,
        flexGrow: 1
    }
})