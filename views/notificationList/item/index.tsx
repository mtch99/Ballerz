

import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { INotificationItemProps } from '../interface'
import ListItemButton from '../../../components/Buttons/ListItemButton'
import { globalStyles } from '../../styles'

export default class NotificationItem extends Component<INotificationItemProps> {
  
    render() {
        return(
            <View
                style={styles.container}
            >
                <Text
                    style={styles.notificationText}
                >
                    {this.props.senderProfile.username} veut être votre ami
                </Text>

                <ListItemButton
                    onPress={() => {
                        // this.context.notificationController.deleteNotification(item.id)
                    }}
                    selected={this.props.friendshipRequest.status=="accepted"}
                    title={"accepter"}
                />
            </View>
        )
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: globalStyles.global.itemBackgroundColor,
    },

    notificationText: {
        color: "#FFFFFF",
        fontSize: 16,
    }
})