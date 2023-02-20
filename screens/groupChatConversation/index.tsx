import IGroupChatController, { IGroupChatContext } from "../../controllers/groupChat/interface"
import { GroupChatContext } from "../../controllers/groupChat/provider"
import {View, Text} from 'react-native'
import IGroupChatConversationScreen, { IGroupChatConversationViewProps } from "./interface"
import React from "react"
import { IGroupChatState } from "../../app/features/groupChat/slice/interface"
import GroupChatConversationView from "../../views/groupChatConversation"



export interface IGroupChatConversationScreenPropsWithoutNavigation {
    groupChat: IGroupChatState
}

export interface IGroupChatConversationScreenProps extends IGroupChatConversationScreenPropsWithoutNavigation {
    navigationController: IGroupChatConversationScreen['navigationController']
}


/**
 * TODO: implement handlemessagePress function
 */

export default class GroupChatConversationScreen extends React.Component<IGroupChatConversationScreenProps> implements IGroupChatConversationScreen{

    navigationController: IGroupChatConversationScreen['navigationController'] = this.props.navigationController
    groupChat: IGroupChatState = this.props.groupChat

    static contextType = GroupChatContext
    context: React.ContextType<typeof GroupChatContext> = {} as IGroupChatContext
    private groupChatController: IGroupChatController = this.context.controller


    constructor(props: IGroupChatConversationScreenProps){
        super(props)
        this.handleSendMessagePress = this.handleSendMessagePress.bind(this)
    }


    viewProps: IGroupChatConversationViewProps = {
        handleSendMessagePress: (message: string, groupChatId: string) => { this.handleSendMessagePress(groupChatId, message)},
        groupChat: this.groupChat
    }
    
    
    handleSendMessagePress(groupChatId: string, messageContent: string){
        this.groupChatController.sendGroupChatMessage({groupChatId, messageContent, senderUserProfileId:'moiId'})
        console.error(`Implement handlemessagePress function in GroupChatConversationScreen`)
    }
    componentDidMount() {
        this.groupChatController = this.context.controller
    }


    render(): React.ReactNode {
        return(
            <GroupChatConversationView
                {...this.viewProps}
            />
        )
    }
}