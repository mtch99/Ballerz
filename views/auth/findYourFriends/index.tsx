import React from "react";
import { IFindYourFriendsViewProps } from "../../../screens/createProfile/findYourFriends/interface";
import { SafeAreaView } from "react-native-safe-area-context";
import {SelectableUserProfileListView} from "../../userProfileList/selectable";
import HeaderView from "../../header";
import CheckButton from "../../header/buttons/checkButton"
import { globalStyles } from "../../styles";
import { Alert, Share, StyleSheet } from "react-native";
import FindYourFriendsBottomSheetView from "../../makeFriends/findYourFriendsBottomSheet";
import InviteYourFriendsFeedBackView from "../../teachingFeedBack/inviteYourFriends";


export default class FindYourFriendsView extends React.Component<IFindYourFriendsViewProps>{

    constructor(props: IFindYourFriendsViewProps) {
        super(props);
        this.onPressInvitationLink = this.onPressInvitationLink.bind(this);
    }
    
    async onPressInvitationLink(): Promise<void> {
        try {
            const result = await Share.share({
              message:'https://testflight.apple.com/join/6GBFVtwg',
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
            <SafeAreaView
             style={styles.container}
            >
                <HeaderView
                    title="Trouve tes amis"
                    rightButton={CheckButton}
                    leftButtonProps={{onPress: () => {}}}
                    rightButtonProps={{onPress: this.props.onPressContinue}}
                />
                <InviteYourFriendsFeedBackView
                    onPressInvitationLink={this.onPressInvitationLink}
                />
                <SelectableUserProfileListView
                    onAddButtonPress={this.props.onAddButtonPress}
                    usersList={this.props.usersList}
                />
                <FindYourFriendsBottomSheetView/>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.global.screenBackGroundColor,
        flexGrow: 1
    }
})