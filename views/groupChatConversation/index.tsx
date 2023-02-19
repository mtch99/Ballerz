import React from "react";
import { IGroupChatConversationViewProps } from "../../screens/groupChatConversation/interface";
import { View, Text, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { MessageItemView } from "./messageItem";
import MessageInputView from "./messageInputView";
import { IMessageInputViewProps } from "./interface";



export default class GroupChatConversationView extends React.Component<IGroupChatConversationViewProps>{

    groupChat = this.props.groupChat
    conversation = this.groupChat.conversation

    messageInputViewProps: IMessageInputViewProps = {
        onPressSend: (textInput: string) => {
            const message = textInput
            this.props.handleSendMessagePress(message)
        }
    } 

    render() {
        return(
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View
                    style={{height: '35%', flexGrow:1}}
                >
                    <FlatList
                        data={this.conversation}
                        extraData={this.conversation}
                        renderItem={({item}) => {
                            return(
                                <MessageItemView
                                    message={item}
                                />
                            )
                        }}
                    />
    
                </View>
                <MessageInputView
                    {...this.messageInputViewProps}
                />
            </KeyboardAvoidingView>
        )
    }
}