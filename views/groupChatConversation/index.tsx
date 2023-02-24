import React from "react";
import { IGroupChatConversationViewProps } from "../../screens/groupChatConversation/interface";
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
        console.warn(" GroupChatConversationView mounted with props: \n " + JSON.stringify(this.props))
    }

    componentDidUpdate(prevProps: Readonly<IGroupChatConversationViewProps>, prevState: Readonly<{}>, snapshot?: any): void {
        const length = this.props.groupChatMap[this.props.groupChatId].conversation.length
        console.warn(" GroupChatConversationView updated with props: \n " + JSON.stringify(this.props.groupChatMap[this.props.groupChatId].conversation[length-1])
            + " \n to....:" + JSON.stringify(this.props.groupChatMap[this.props.groupChatId].conversation)
        )
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
                                console.log('id:   ' + item.id)
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