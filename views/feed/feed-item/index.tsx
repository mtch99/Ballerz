import React, { Component, ReactElement } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { IFeedItemState} from "../../../app/features/feed/slice/interface";
import BottomView from "./Bottom";
import Header from "./Header";
import { BodyView } from "./Body";
import IFeedScreen, { IPostCommentInput } from "../../../screens/feed/interface";
import { style } from "./styles";
import CommentsView from "./Bottom/Comments";

interface IFeedItemViewProps{
	feedItem: IFeedItemState
	handleBadgeClick: IFeedScreen['handleBadgeClick']
	handleFriendsTherePress: IFeedScreen['handleFriendsTherePress']
	handleInvitePress: IFeedScreen['handleInvitePress']
	handlePlayButtonPress: IFeedScreen['handlePlayButtonPress']
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
				startingDateTime={feedItem.startingTime}
				endingDateTime={feedItem.endingTime}
				playerNum={props.feedItem.attendants.length}
				onBadgeClick={() => {onBadgeClick()}}
				badgeList={feedItem.badges}
				onPressPlayersNum={onPressFriendsThere}
				friendsHere={feedItem.friendsThere}
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


function CommentView(props: IFeedItemViewProps){
	const feedItem = props.feedItem
	return(
		<>
			{
				props.feedItem.comments.length>0?(
					<CommentsView
						onPressCommentsNumber={() => {props.onPressCommentButton()}}
						comments={feedItem.comments}
					/>
				):(null)
			}
		</>
	)
}


