import IGroupChatController, { IGroupChatContext } from "../../controllers/groupChat/interface"
import { GroupChatContext } from "../../controllers/groupChat/provider"
import {View, Text} from 'react-native'
import IGroupChatConversationScreen, { IGroupChatConversationViewProps } from "./interface"
import React from "react"
import GroupChatConversationView from "../../views/groupChatConversation"
import IGroupChatMapState from "../../app/features/groupChat/groupChatMap/slice/interface"
import { AppContext, IAppContext } from "../../controllers/provider"
import { GroupChatStackNavigationProp, GroupChatStackScreenProps } from "../../navigation/groupChat/types"
import { IGroupChatState } from "../../app/features/groupChat/types"



export interface IGroupChatConversationScreenPropsWithoutNavigation {
    groupChatId: string
}

export interface IGroupChatConversationScreenProps extends IGroupChatConversationScreenPropsWithoutNavigation {
    navigationController: IGroupChatConversationScreen['navigationController']
    // navigation: GroupChatStackScreenProps<'GroupChatConversationScreen'>
}




export interface IGroupChatConversationState {
    groupChat: IGroupChatState
}


export default class GroupChatConversationScreen extends React.Component<IGroupChatConversationScreenProps, IGroupChatConversationState> implements IGroupChatConversationScreen{

    navigationController: IGroupChatConversationScreen['navigationController'] = this.props.navigationController
    groupChat: IGroupChatState = {} as IGroupChatState
    groupChatMap: IGroupChatMapState = {} as IGroupChatMapState

    state = {
        groupChat: this.groupChat
    }
    
    
    
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext
    private groupChatController: IGroupChatController = this.context.groupChatController


    constructor(props: IGroupChatConversationScreenProps){
        super(props)
        this.handleSendMessagePress = this.handleSendMessagePress.bind(this)
    }

    componentDidMount() {
        this.groupChatController = this.context.groupChatController
        this.groupChatMap = this.context.groupChatMapState
        this.setState((prevState) => {
            return {
                ...prevState,
                groupChat: this.context.groupChatMapState[this.props.groupChatId]
            }
        })
        this.groupChat = this.context.groupChatMapState[this.props.groupChatId]

    }


    componentDidUpdate(prevProps: Readonly<IGroupChatConversationScreenProps>, prevState: Readonly<{}>, snapshot?: any): void {

    }



    viewProps: IGroupChatConversationViewProps = {
        handleSendMessagePress: (message: string, groupChatId: string) => { this.handleSendMessagePress(message, groupChatId)},
        groupChatMap: this.context.groupChatMapState,
        groupChatId: this.props.groupChatId
    }
    
    
    handleSendMessagePress(groupChatId: string, messageContent: string){
        this.groupChatController.sendGroupChatMessage({groupChatId, messageContent, senderUserProfileId:'moiId'})
    }



    render(): React.ReactNode {
        return(
            <GroupChatConversationView
                {...this.viewProps}
                groupChatMap={this.context.groupChatMapState}
            />
        )
    }
}