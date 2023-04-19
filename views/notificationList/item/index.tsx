

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


function FriendshipRequestNotificationItem(props: IFriendShipRequestNotification & 
    {onPressAcceptFriendshipRequest: (item: IFriendShipRequestNotification) => void}
) {
    return(
        <View
            style={styles.container}
        >
            <View
                style={styles.textContainer}
            >
                <Text
                    style={{...styles.notificationText, fontWeight: 'bold' }}
                >
                    {props.senderProfile.username + " "}
                </Text>
                <Text
                    style={styles.notificationText}
                >
                    veut être votre ami
                </Text>

            </View>

            <View
                style={styles.buttonContainer}
            >
                <ListItemButton
                    onPress={() => {props.onPressAcceptFriendshipRequest(props)}}
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
            <View
                style={{...styles.textContainer, width: '100%' }}
            >
                <Text
                    style={{...styles.notificationText, fontWeight: "bold"}}
                >
                    {props.senderProfile.username + ' '}
                </Text>
                <Text
                    style={styles.notificationText}
                >
                    et vous êtes maintenant amis
                </Text>
            </View>

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
        // justifyContent: 'center',
        justifyContent:'space-between',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 14,
        // justifyContent: 'center',
        backgroundColor: globalStyles.global.itemBackgroundColor,
    },

    buttonContainer: {
        alignSelf: 'flex-end',
    },

    notificationText: {
        color: "#FFFFFF",
        fontSize: 14,
        flexWrap: 'wrap'
    },
    textContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // paddingRight: 15,
        width: '80%'

    }


})