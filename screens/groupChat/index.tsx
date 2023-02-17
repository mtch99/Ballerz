import React from "react";
import IGroupChatListScreen, { IGroupChatNavigationController } from "./interface";
import { IGroupChatState } from "../../app/features/groupChat/slice/interface";
import { View, Text } from "react-native";
import {GroupChatContext, IGroupChatContext} from "../../controllers/groupChat/provider"
import IGroupChatController from "../../controllers/groupChat/interface";


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


    componentDidMount() {
        this.groupChatController = this.context.controller
        this.groupChatController.getGroupChatList()
    }

    getGroupChatList() {
        this.groupChatController.getGroupChatList()
    }

    handleGroupChatPress(groupChat: IGroupChatState): void {
        this.navigationController.goToGroupChatScreen(groupChat)
    }

    render(): React.ReactNode {
        return(
            <View>
                <Text
                    style={{color: 'white'}}
                >
                    {this.context.groupChatListState.items.length>0?(this.context.groupChatListState.items[0].name):("RAS")}
                </Text>
            </View>
        )
    }
}