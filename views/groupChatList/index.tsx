import React from "react";
import { FlatList, View, Text } from "react-native";
import { GroupChatItemView } from "./groupChatItem";
import { IGroupChatListViewProps } from "../../screens/groupChat/interface";
import { IGroupChatListItemState, IGroupChatState } from "../../app/features/groupChat/types";




export class GroupChatListView extends React.Component<IGroupChatListViewProps>{

    constructor(props: IGroupChatListViewProps) {
        super(props)
        // this.onPressGroupChat.bind(this)
    }


    onPressGroupChat(item: IGroupChatListItemState){
        this.props.onPressGroupChat(item.id);
        
    }

    render(): React.ReactNode {
        return(
            <FlatList
                style={{backgroundColor: '#121212'}}
                data={this.props.groupChatList.items}
                extraData={this.props.groupChatList}
                renderItem={({item}) => {
                    return(
                        <GroupChatItemView
                            groupChatListItem={item}
                            onPressGroupChat={() => {this.onPressGroupChat(item)}}
                        />
                    )
                }}
            />
        )
    }
}
