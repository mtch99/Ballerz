import React from "react";
import { IMessageItemViewProps } from "../interface";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { IFeedItemState } from "../../../app/features/feed/slice/interface";
import { IGroupChatMessageState } from "../../../app/features/groupChat/types";
import GroupChatGameInvitationView from "./GameInvitation";



export class MessageItemView extends React.Component<IMessageItemViewProps>{

    message: IGroupChatMessageState = this.props.message
    render() {
        if(typeof this.message.content == 'string'){
            return (
                <View style={styles.container}>
                    <View style={styles.messageContainer}>
                        <Text style={styles.textMessage}>
                            {this.message.content}
                        </Text>
                        <Text style={styles.authorUsernameText}>
                            {this.message.author.username}
                        </Text>
                    </View>
                </View>
            )
        }
        else if (typeof this.message.content != 'string' ){
            return (
                <GroupChatGameInvitationView
                    feedItem={this.message.content} 
                    handleBadgeClick={function (feedItem: IFeedItemState): void {
                        console.log("Function not implemented.");
                    } } 
                    handleFriendsTherePress={function (feedItem: IFeedItemState): void {
                        console.log("Function not implemented.");
                    } } 
                    handleInvitePress={function (feedItem: IFeedItemState): void {
                        console.log("Function not implemented.");
                    } } 
                    handlePlayButtonPress={function (feedItem: IFeedItemState): void {
                        console.log("Function not implemented.");
                    } } 
                    onPressCommentButton={function (): void {
                        console.log("Function not implemented.");
                    } }                    
                />
            )
        }
    }
}