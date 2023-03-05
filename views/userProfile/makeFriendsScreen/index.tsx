import React from "react";
import { Text, View } from "react-native";
import { UserProfileListView } from "../userProfileList";
import { IUserProfileListViewProps } from "../../../screens/userProfileSearch/interface";
import styles from "./styles";



export class MakeFriendsView extends React.Component<IUserProfileListViewProps>{
    

    render(): React.ReactNode {
        return(
            <View>
                <View style={styles.inviteContactsContainer}>
                    <Text style={styles.inviteContactsText}>Invite tes amis sur ballerz avec un lien d'invitation: </Text>
                    <Text 
                        style={styles.inviteLinkText}
                    > 
                        MKMKNMOKINIONHJIOJ
                        </Text>
                </View>
                <UserProfileListView
                    {...this.props}
                />
            </View>
        )
    }
}