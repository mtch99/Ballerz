import React from "react"
import { IGroupChatState } from "../../../app/features/groupChat/slice/interface"
import { TouchableOpacity, View, Text } from "react-native"
import { IGroupChatItemViewProps } from "../interface"





export class GroupChatItemView extends React.Component<IGroupChatItemViewProps>{

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
                    <Text
                        style={{color: 'white'}}
                    >
                        {this.groupChat.name}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}