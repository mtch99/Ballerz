import React from "react";
import IGroupChatListView from "./interface";
import { FlatList, View, Text } from "react-native";
import { IGroupChatListState, IGroupChatState } from "../../app/features/groupChat/slice/interface";
import { GroupChatItemView } from "./groupChatItem";



export interface IGroupChatListViewProps {
    groupChatList: IGroupChatListState
    onPressGroupChat: (groupChat: IGroupChatState) => void
}

export class GroupChatListView extends React.Component<IGroupChatListViewProps>{

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
