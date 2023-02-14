import React, { Component, ReactElement } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { IFeedItemState} from "../../../app/features/feed/slice/interface";
import BottomView from "./Bottom";
import Header from "./Header";
import { BodyView } from "./Body";
import IFeedScreen, { IPostCommentInput } from "../../../screens/feed/interface";
import { style } from "./styles";

interface IFeedItemViewProps{
	feedItem: IFeedItemState
	handleBadgeClick: IFeedScreen['handleBadgeClick']
	handleFriendsTherePress: IFeedScreen['handleFriendsTherePress']
	handleInvitePress: IFeedScreen['handleInvitePress']
	handlePlayButtonPress: IFeedScreen['handlePlayButtonPress']
	// postCommemt: IFeedScreen['postComment']
	onPressCommentButton: () => void
}


export default function FeedItemView(props: IFeedItemViewProps){
	const feedItem = props.feedItem
	const handleBadgeClick = props.handleBadgeClick
	const onBadgeClick = () => {
		handleBadgeClick(feedItem)
	}
	const onPressFriendsThere = () => {
		props.handleFriendsTherePress(feedItem)
	}
	const onPressInvite = () => {
		props.handleInvitePress(feedItem)
	}
	const onPressPlay = () => {
		props.handlePlayButtonPress(feedItem)
	}

	const handlePostComment = (commentText: string) => {
		const input: IPostCommentInput = {
			feedItem,
			commentText
		}
	}

	const onPressCommentButton = () => {
		props.onPressCommentButton()
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
				onPressCommentButton={() => {onPressCommentButton()}}
				onPressPlay={() => {onPressPlay()}}
				friendsThere={feedItem.friendsThere}
				onPressFriendsThere={() => {onPressFriendsThere()}}
				onPressInvite={() => {onPressInvite()}}
			/>
		</View>
	)
}


