import React from "react";
import IGroupChatListScreen, { IGroupChatNavigationController } from "./interface";
import { IGroupChatListState, IGroupChatState } from "../../app/features/groupChat/slice/interface";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
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

    handleGroupChatPress(groupChat: IGroupChatState): void {
        // console.warn(JSON.stringify(this))
        this.navigationController.goToGroupChatConversationScreen(groupChat)
    }

    render(): React.ReactNode {
        return(
            <GroupChatListView
                groupChatList={this.context.groupChatListState}
                onPressGroupChat={this.handleGroupChatPress}
            />
        )
    }
}


interface IGroupChatListViewProps {
    groupChatList: IGroupChatListState
    onPressGroupChat: (groupChat: IGroupChatState) => void
}

class GroupChatListView extends React.Component<IGroupChatListViewProps>{

    constructor(props: IGroupChatListViewProps) {
        super(props)
        // this.onPressGroupChat.bind(this)
    }

    onPressGroupChat(item: IGroupChatState){
        this.props.onPressGroupChat(item);
    }

    render(): React.ReactNode {
        return(
            <FlatList
                data={this.props.groupChatList.items}
                extraData={this.props.groupChatList}
                renderItem={({item}) => {
                    return(
                        <GroupChatItemView
                            groupChat={item}
                            onPressGroupChat={() => {this.onPressGroupChat(item)}}
                        />
                    )
                }}
            />
        )
    }
}


interface IGroupChatItemViewProps {
    groupChat: IGroupChatState
    onPressGroupChat: () => void
}
class GroupChatItemView extends React.Component<IGroupChatItemViewProps>{

    groupChat = this.props.groupChat
    
    constructor(props: IGroupChatItemViewProps) {
        super(props)
    }


    onPressGroupChat() {
        this.props.onPressGroupChat()
    }

    render(): React.ReactNode {
        return(
            <View>
                <TouchableOpacity
                    onPress={() => {this.onPressGroupChat()}}
                >
                    <Text>
                        {this.groupChat.name}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}