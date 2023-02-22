import React from "react";
import IGroupChatListScreen, { IGroupChatNavigationController } from "./interface";
import { IGroupChatListState, IGroupChatState } from "../../app/features/groupChat/groupChatList/slice/interface";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import {GroupChatContext} from "../../controllers/groupChat/provider"
import IGroupChatController, { IGroupChatContext } from "../../controllers/groupChat/interface";
import { GroupChatListView } from "../../views/groupChatList";


export interface IGroupChatListScreenPropsWithoutNavigation {
    
}

export interface IGroupChatListScreenProps {
    navigationController: IGroupChatListScreen['navigationController']
}

export default class GroupChatListScreen extends React.Component<IGroupChatListScreenProps> implements IGroupChatListScreen{

    navigationController: IGroupChatListScreen['navigationController'] = this.props.navigationController


    static contextType = GroupChatContext
    context: React.ContextType<typeof GroupChatContext> = {} as IGroupChatContext
    private groupChatController: IGroupChatController = this.context.controller


    constructor(props: IGroupChatListScreenProps){
        super(props)
        this.handleGroupChatPress = this.handleGroupChatPress.bind(this)
    }


    componentDidMount() {
        this.groupChatController = this.context.controller
        this.groupChatController.getGroupChatList()
    }

    getGroupChatList() {
        this.groupChatController.getGroupChatList()
    }

    handleGroupChatPress(id: IGroupChatState['id']): void {
        const groupChat = this.context.groupChatMap[id]
        if(groupChat){
            this.navigationController.goToGroupChatConversationScreen(groupChat)
        } else {
            // console.error("Attempting to navigate to a groupChat absent from the groupChatModelRepo")
        }
    }

    render(): React.ReactNode {
        return(
            <GroupChatListView
                groupChatList={this.context.groupChatList}
                onPressGroupChat={this.handleGroupChatPress}
            />
        )
    }
}





