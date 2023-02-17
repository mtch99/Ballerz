import IGroupChatController from "../../controllers/groupChat/interface"
import { GroupChatContext, IGroupChatContext } from "../../controllers/groupChat/provider"
import {View, Text} from 'react-native'
import IGroupChatConversationScreen from "./interface"
import React from "react"
import { IGroupChatState } from "../../app/features/groupChat/slice/interface"



export interface IGroupChatConversationScreenPropsWithoutNavigation {
    groupChat: IGroupChatState
}

export interface IGroupChatConversationScreenProps extends IGroupChatConversationScreenPropsWithoutNavigation {
    navigationController: IGroupChatConversationScreen['navigationController']
}




export default class GroupChatConversationScreen extends React.Component<IGroupChatConversationScreenProps> implements IGroupChatConversationScreen{

    navigationController: IGroupChatConversationScreen['navigationController'] = this.props.navigationController
    groupChat: IGroupChatState = this.props.groupChat

    static contextType = GroupChatContext
    context: React.ContextType<typeof GroupChatContext> = {} as IGroupChatContext
    private groupChatController: IGroupChatController = this.context.controller

    constructor(props: IGroupChatConversationScreenProps){
        super(props)
    }

    componentDidMount() {
        this.groupChatController = this.context.controller
    }


    render(): React.ReactNode {
        return(
            <View>
                <Text
                    style={{color: 'white'}}
                >
                    {this.groupChat.conversation.length>0?(this.groupChat.conversation[0].author.username):(2)}
                </Text>
            </View>
        )
    }
}