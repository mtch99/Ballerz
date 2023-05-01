

import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { INotificationItemProps } from '../interface'
import ListItemButton from '../../../components/Buttons/ListItemButton'
import { globalStyles } from '../../styles'
import { IFriendPlayingNotification, IFriendShipRequestNotification, INewFriendNotification, NotificationType } from '../../../domain/use-cases/types'
import { parseTimeSlotToString } from './utils/dateParser'

export default class NotificationItem extends Component<INotificationItemProps> {
  
    render() {
        switch (this.props.type) {
            case NotificationType.friendshipRequest:
                return <FriendshipRequestNotificationItem {...this.props} />

            case NotificationType.newFriend:
                return <NewFriendNotificationView {...this.props} />

            case NotificationType.friendPlaying:
                return <FriendPlayingNotificationView {...this.props} />

            default:
                return <></>
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
                style={{...styles.textContainer, width:"80%"}}
            >
                <Text
                    style={styles.notificationText}
                >
                    <Text
                        style={{...styles.notificationText, fontWeight: 'bold' }}
                        >
                        {props.senderProfile.username + " "}
                    </Text>
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


export interface INewFriendNotificationViewProps extends INewFriendNotification{

}


function NewFriendNotificationView(props: INewFriendNotificationViewProps) {
    return(
        <View
            style={styles.container}
        >
            <View
                style={{...styles.textContainer, width: '100%' }}
            >
                    <Text
                        style={styles.notificationText}
                    >
                    <Text
                        style={{...styles.notificationText, fontWeight: "bold"}}
                    >
                        {props.senderProfile.username + ' '}
                    </Text>
                        et vous êtes maintenant amis 
                    </Text>
            </View>
        </View>
    )
}

export interface IFriendPlayingNotificationViewProps extends IFriendPlayingNotification{
    onPressJoinButton: () => void;
}
function FriendPlayingNotificationView(props: IFriendPlayingNotificationViewProps){
    return(
        <View
            style={styles.container}
        >
            <View
                style={{...styles.textContainer }}
            >
                <Text
                    style={{...styles.notificationText, fontWeight: "bold"}}
                >
                    {props.senderProfile.username + ' '}
                </Text>
                <Text
                    style={styles.notificationText}
                >
                    sera à {" "}
                </Text>
                <Text
                    style={{...styles.notificationText, fontWeight: "bold"}}
                >
                    {props.game.place.name + " "}
                </Text>
                <Text
                    style={styles.notificationText}
                >
                    {parseTimeSlotToString(new Date(props.game.startingTime), new Date(props.game.endingTime)) + ". "}
                </Text>
                <Text
                    style={styles.notificationText}
                >
                    Rejoignez le !
                </Text>
            </View>
            <ListItemButton
                selected={false}
                onPress={() => {
                    props.onPressJoinButton()
                }}
                title={"rejoindre"}
            />
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