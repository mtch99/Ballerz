import React, { Component, ReactElement } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { IFeedItemState} from "../../../app/features/feed/slice/interface";
import BottomView from "./Bottom";
import Header from "./Header";
import { BodyView } from "./Body";
import IFeedScreen from "../../../screens/feed/interface";
import { style } from "./styles";

interface IFeedItemViewProps{
  feedItem: IFeedItemState
  handleBadgeClick: IFeedScreen['handleBadgeClick']
  handleFriendsTherePress: IFeedScreen['handleFriendsTherePress']
  handleInvitePress: IFeedScreen['handleInvitePress']
}


export default function FeedItemView(props: IFeedItemViewProps){
	const feedItem = props.feedItem
	const handleBadgeClick = props.handleBadgeClick
	const handleFriendsTherePress = props.handleFriendsTherePress
	const onBadgeClick = () => {
		// console.warn(this)
		handleBadgeClick(feedItem)
	}
	const onPressFriendsThere = () => {
		handleFriendsTherePress(feedItem)
	}
	const onPressInvite = () => {
		props.handleInvitePress(props.feedItem)
	}
	
	return (
		<View style={style.container}>
			<Header
				text={feedItem?(feedItem.place.name):""}
			/>
			<BodyView
				playerNum={props.feedItem.attendants.length}
				onBadgeClick={() => {onBadgeClick()}}
				badgeList={feedItem.badges}
			/>
			<BottomView
				onPressFriendsThere={() => {onPressFriendsThere()}}
				onPressInvite={() => {onPressInvite()}}
			/>
		</View>
	)
}


