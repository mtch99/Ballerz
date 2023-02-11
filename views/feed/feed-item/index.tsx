import React, { Component, ReactElement } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { IFeedItemState} from "../../../app/features/feed/slice/interface";
import BottomView from "./Bottom";
import Header from "./Header";
import { BodyView } from "./Body";
import IFeedScreen from "../../../screens/feed/interface";

interface IFeedItemViewProps{
  feedItem: IFeedItemState
  handleBadgeClick: IFeedScreen['handleBadgeClick']
  handleFriendsTherePress: IFeedScreen['handleFriendsTherePress']
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
	
	return (
		<View style={style.container}>
			<Header
				text={feedItem?(feedItem.place.name):""}
			/>
			<BodyView
				onBadgeClick={() => {onBadgeClick()}}
				badgeList={feedItem.badges}
			/>
			<BottomView
				onPressFriendsThere={() => {onPressFriendsThere()}}
			/>
		</View>
	)
}


const style = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    width: 375,
    height: 114
  },
});