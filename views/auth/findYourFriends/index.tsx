import React from "react";
import { IFindYourFriendsViewProps } from "../../../screens/userProfileList/findYourFriends/interface";
import {SelectableUserProfileListView, UserProfileItemView} from "../../userProfileList/selectable";
import HeaderView from "../../header";
import CheckButton from "../../header/buttons/checkButton"
import { globalStyles } from "../../styles";
import { Alert, Share, StyleSheet, SafeAreaView } from "react-native";
import FindYourFriendsBottomSheetView from "../../makeFriends/findYourFriendsBottomSheet";
import InviteYourFriendsFeedBackView from "../../teachingFeedBack/inviteYourFriends";
import SearchBarView from "../../makeFriends/SearchBar";
import { BallerzFlatList } from "../../../components/Flatlist";
import { IUserProfileData } from "../../../domain/use-cases/types";
import { ISelectableUserProfileData } from "../../../screens/interface";
import { FlatList } from "react-native-gesture-handler";
import BallerzSafeAreaView from "../../safeArea";


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
            <BallerzSafeAreaView
            >
                <>
                <HeaderView
                    title="Trouve tes amis"
                    rightButton={CheckButton}
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
                </>
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