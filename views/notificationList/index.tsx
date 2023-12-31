import { FlatList, Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import ListItemButton from '../../components/Buttons/ListItemButton'
import BallerzSafeAreaView from '../safeArea'
import { IFriendPlayingNotificationState, IFriendShipRequestNotificationState, NotificationListState, NotificationState } from '../../app/features/notifications/slice/interface'
import { globalStyles } from '../styles'
import NotificationItem from './item'
import { IFriendShipRequestNotification, NotificationType } from '../../domain/use-cases/types'
import BallerzHeaderView from '../../components/header'
import { HeaderBackButton } from '@react-navigation/elements'
import BallerzHeaderBackButton from '../../components/header/buttons/headerBackButton'
import { LoadingModalView } from '../../components/Modals/loadingView'

export interface IProps {
    notificationList: NotificationState[]
    onPressAcceptFriendshipRequest: (notification: IFriendShipRequestNotificationState) => void
    onPressJoinFriendButton: (notification: IFriendPlayingNotificationState) => void
    loading: boolean
    isPresent: (notification: IFriendPlayingNotificationState) => boolean
}
export default class NotificationListView extends Component<IProps> {
    
    render(): React.ReactNode {
        return(
            <BallerzSafeAreaView>
                <>
                <LoadingModalView
                    isVisible={this.props.loading}
                />
                <BallerzHeaderView
                    title="Notifications"
                    leftButton={<></>}
                    rightButton={<></>}
                />
                <FlatList
                    data={this.props.notificationList}
                    extraData={this.props.notificationList}
                    renderItem={({item}) => (
                        <NotificationItem 
                            {...item}
                            onPress={() => {}}
                            onPressAcceptFriendshipRequest={this.props.onPressAcceptFriendshipRequest}
                            onPressJoinButton={() => {
                                if(item.type == NotificationType.friendPlaying){
                                    this.props.onPressJoinFriendButton(item)
                                }
                            }}
                            isPresent={this.props.isPresent}
                        />
                    )}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                />     
                </>
            </BallerzSafeAreaView>
        ) 
    }
}



function ItemSeparatorComponent(){
    return(
        <View
            style={styles.separatorContainer}
        >
            <View
                style={styles.separator}
            />
        </View>
    )
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
    },

    separatorContainer: {
        height: 20,
        backgroundColor:'transparent',
        alignItems: 'center'
    },

    separator: {
        borderWidth: 1,
        borderColor: '#333333'
    },
})