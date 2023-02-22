import IGroupChatController, { IGroupChatContext } from "../../controllers/groupChat/interface"
import { GroupChatContext } from "../../controllers/groupChat/provider"
import {View, Text} from 'react-native'
import IGroupChatConversationScreen, { IGroupChatConversationViewProps } from "./interface"
import React from "react"
import { IGroupChatState } from "../../app/features/groupChat/groupChatList/slice/interface"
import GroupChatConversationView from "../../views/groupChatConversation"
import IGroupChatMapState from "../../app/features/groupChat/groupChatMap/slice/interface"



export interface IGroupChatConversationScreenPropsWithoutNavigation {
    groupChat: IGroupChatState
}

export interface IGroupChatConversationScreenProps extends IGroupChatConversationScreenPropsWithoutNavigation {
    navigationController: IGroupChatConversationScreen['navigationController']
}



export default class GroupChatConversationScreen extends React.Component<IGroupChatConversationScreenProps> implements IGroupChatConversationScreen{

    navigationController: IGroupChatConversationScreen['navigationController'] = this.props.navigationController
    groupChat: IGroupChatState = this.props.groupChat
    groupChatMap: IGroupChatMapState = this.context.groupChatMap

    

    static contextType = GroupChatContext
    context: React.ContextType<typeof GroupChatContext> = {} as IGroupChatContext
    private groupChatController: IGroupChatController = this.context.controller


    constructor(props: IGroupChatConversationScreenProps){
        super(props)
        this.handleSendMessagePress = this.handleSendMessagePress.bind(this)
    }


    viewProps: IGroupChatConversationViewProps = {
        handleSendMessagePress: (message: string, groupChatId: string) => { this.handleSendMessagePress(message, groupChatId)},
        groupChat: this.groupChatMap[this.groupChat.id]
    }
    
    
    handleSendMessagePress(groupChatId: string, messageContent: string){
        this.groupChatController.sendGroupChatMessage({groupChatId, messageContent, senderUserProfileId:'moiId'})
    }
    componentDidMount() {
        this.groupChatController = this.context.controller
        this.groupChatMap = this.context.groupChatMap
    }


    render(): React.ReactNode {
        return(
            <GroupChatConversationView
                {...this.viewProps}
            />
        )
    }
}