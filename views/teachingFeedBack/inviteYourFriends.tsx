import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import styles from "./styles";

interface IProps {
    onPressInvitationLink(): void
}

export default class InviteYourFriendsFeedBackView extends React.Component<IProps>{
    

    render(): React.ReactNode {
    
        return(
            <View style={styles.container}>
                    <Text style={styles.text}>Invite tes amis sur ballerz en grâce sur ce lien d'invitation: </Text>
                    <TouchableOpacity
                        onPress={() => {this.props.onPressInvitationLink()}}
                    >
                        <Text 
                            style={{color: 'skyblue',textDecorationLine: 'underline'}}
                        > 
                            https://testflight.apple.com/join/6GBFVtwg
                        </Text>
                    </TouchableOpacity>
                </View>
        )
    }
}