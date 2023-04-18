

import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { INotificationItemProps } from '../interface'
import ListItemButton from '../../../components/Buttons/ListItemButton'
import { globalStyles } from '../../styles'
import { IFriendShipRequestNotification, INewFriendNotification, NotificationType } from '../../../domain/use-cases/types'

export default class NotificationItem extends Component<INotificationItemProps> {
  
    render() {
        switch (this.props.type) {
            case NotificationType.friendshipRequest:
                return <FriendshipRequestNotificationItem {...this.props} />

            case NotificationType.newFriend:
                return <NewFriendNotificationItem {...this.props} />

            default:
        }
  }
}


function FriendshipRequestNotificationItem(props: IFriendShipRequestNotification & {onPress: () => void}) {
    return(
        <View
            style={styles.container}
        >
            <Text
                style={styles.notificationText}
            >
                {props.senderProfile.username} veut être votre ami
            </Text>

            <View
                style={styles.buttonContainer}
            >
                <ListItemButton
                    onPress={props.onPress}
                    selected={props.friendshipRequest.status=="accepted"}
                    title={"accepter"}
                />
            </View>

        </View>
    )
}


function NewFriendNotificationItem(props: INewFriendNotification) {
    return(
        <View
            style={styles.container}
        >
            <Text
                style={styles.notificationText}
            >
                Vous êtes maintenant amis avec {props.senderProfile.username} veut être votre ami
            </Text>

            {/* <View
                style={styles.buttonContainer}
            >
                <ListItemButton
                    onPress={() => {
                        // this.context.notificationController.deleteNotification(item.id)
                    }}
                    selected={props.friendshipRequest.status=="accepted"}
                    title={"accepter"}
                />
            </View> */}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 14,
        // justifyContent: 'center',
        backgroundColor: globalStyles.global.itemBackgroundColor,
    },

    buttonContainer: {
        alignSelf: 'flex-end',
        marginRight: 10
    },

    notificationText: {
        color: "#FFFFFF",
        fontSize: 16,
        marginLeft: 30,
        marginRight: 30,
    },


})