import IGroupChatController, { IGroupChatContext } from "../../controllers/groupChat/interface"
import { GroupChatContext } from "../../controllers/groupChat/provider"
import {View, Text} from 'react-native'
import IGroupChatConversationScreen, { IGroupChatConversationViewProps } from "./interface"
import React from "react"
import { IGroupChatState } from "../../app/features/groupChat/groupChatList/slice/interface"
import GroupChatConversationView from "../../views/groupChatConversation"
import IGroupChatMapState from "../../app/features/groupChat/groupChatMap/slice/interface"
import { AppContext, IAppContext } from "../../controllers/provider"



export interface IGroupChatConversationScreenPropsWithoutNavigation {
    groupChatId: string
}

export interface IGroupChatConversationScreenProps extends IGroupChatConversationScreenPropsWithoutNavigation {
    navigationController: IGroupChatConversationScreen['navigationController']
}



export default class GroupChatConversationScreen extends React.Component<IGroupChatConversationScreenProps> implements IGroupChatConversationScreen{

    navigationController: IGroupChatConversationScreen['navigationController'] = this.props.navigationController
    groupChat: IGroupChatState = {} as IGroupChatState
    groupChatMap: IGroupChatMapState = {} as IGroupChatMapState
    
    
    
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext
    private groupChatController: IGroupChatController = this.context.groupChatController


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
        this.groupChatController = this.context.groupChatController
        this.groupChatMap = this.context.groupChatController.groupChatMap
        this.groupChat = this.groupChatMap[this.props.groupChatId]
    }


    render(): React.ReactNode {
        return(
            <GroupChatConversationView
                {...this.viewProps}
            />
        )
    }
}