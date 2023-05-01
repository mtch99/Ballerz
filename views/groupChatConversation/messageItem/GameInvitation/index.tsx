import React from "react";
import {FlatList, SafeAreaView, View } from "react-native";
import { IFeedItemState } from "../../../../app/features/feed/slice/interface";

import IFeedScreen, { IPostCommentInput } from "../../../../screens/feed/interface";
import { style } from "./styles";
import { BodyView } from "./Body";
import BottomView from "./Bottom";
import CommentsView from "./Bottom/Comments";
import Header from "./Header";


interface IFeedItemViewProps{
	feedItem: IFeedItemState
	handleBadgeClick: IFeedScreen['handleBadgeClick']
	handleFriendsTherePress: IFeedScreen['handleParticipantsPress']
	handleInvitePress: IFeedScreen['handleInvitePress']
	handlePlayButtonPress: IFeedScreen['handlePlayButtonPress']
	onPressCommentButton: () => void
}




export default function GroupChatGameInvitationView(props: IFeedItemViewProps){
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
			{
				props.feedItem.comments.length>0?(
					<CommentsView
						onPressCommentsNumber={() => {props.onPressCommentButton()}}
						comments={feedItem.comments}
					/>
				):(null)
			}
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