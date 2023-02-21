import React from "react";
import { IMessageItemViewProps } from "../interface";
import { View, Text } from "react-native";
import { styles } from "./styles";



export class MessageItemView extends React.Component<IMessageItemViewProps>{

    message = this.props.message
    render() {
        if(typeof this.message.content == 'string'){
            return (
                <View style={styles.container}>
                    <View style={styles.messageContainer}>
                        <Text style={styles.textMessage}>
                            {this.message.content}
                        </Text>
                        <Text style={styles.authorUsernameText}>
                            {this.message.author.username}
                        </Text>
                    </View>
                    <Text>
    
                    </Text>
                </View>
            )
        }
        else{
            return (
                <Text>
                    {this.message.content.place.name}
                </Text>
            )
        }
    }
}