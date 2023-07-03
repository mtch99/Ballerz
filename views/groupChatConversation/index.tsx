import React from "react";
import { IGroupChatConversationViewProps } from "../../screens/groupChat/groupChatConversation/interface";
import { View, Text, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { MessageItemView } from "./messageItem";
import MessageInputView from "./messageInputView";
import { IMessageInputViewProps } from "./interface";



export default class GroupChatConversationView extends React.Component<IGroupChatConversationViewProps>{

    groupChat = this.props.groupChatMap
    groupChatId = this.props.groupChatId

    messageInputViewProps: IMessageInputViewProps = {
        onPressSend: (textInput: string) => {
            const message = textInput
            if(this.groupChat){
                this.props.handleSendMessagePress(this.groupChatId, message)
            }
        }
    } 



    componentDidMount(): void {

    }

    componentDidUpdate(prevProps: Readonly<IGroupChatConversationViewProps>, prevState: Readonly<{}>, snapshot?: any): void {

    }



    render() {
        if(this.groupChat){

            return(
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View
                        style={{height: '35%', flexGrow:1}}
                    >
                        <FlatList
                            data={this.props.groupChatMap[this.groupChatId].conversation}
                            extraData={this.groupChat}
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


        return <></>
    }
}