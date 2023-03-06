import React from "react";
import { Alert, Share, Text, TouchableOpacity, View } from "react-native";
import { UserProfileListView } from "../userProfileList";
import { IUserProfileListViewProps } from "../../../screens/userProfileSearch/interface";
import styles from "./styles";



export class MakeFriendsView extends React.Component<IUserProfileListViewProps>{

    async onPressInvitationLink(): Promise<void> {
        try {
            const result = await Share.share({
              message:
                'React Native | A framework for building native apps using React',
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
            <View>
                <View style={styles.inviteContactsContainer}>
                    <Text style={styles.inviteContactsText}>Invite tes amis sur ballerz grace à ce lien d'invitation: </Text>
                    <TouchableOpacity
                        onPress={() => {this.onPressInvitationLink()}}
                    >
                        <Text 
                            style={styles.inviteLinkText}
                        > 
                            MKMKNMOKINIONHJIOJ
                        </Text>
                    </TouchableOpacity>
                </View>
                <UserProfileListView
                    {...this.props}
                />
            </View>
        )
    }
}