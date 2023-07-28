import React from "react";
import {FlatList, SafeAreaView } from "react-native";
import { IFeedItemState, IFeedState } from "../../app/features/feed/slice/interface";
import FeedItemView from "./feed-item/index";
import IFeedScreen, { IPostCommentInput } from "../../screens/game/feed/interface";
import { globalStyles } from "../styles";
import BallerzSafeAreaView from "../safeArea";


interface IProps {
    feedState: IFeedState
	handleBadgeClick: IFeedScreen['handleBadgeClick']
	handleParticipantsPress: IFeedScreen['handleParticipantsPress']
	handleSharePress: IFeedScreen['handleSharePress']
	handlePlayButtonPress: IFeedScreen['handlePlayButtonPress']
	handleCommentButtonPress: (item: IFeedItemState) => void
	handleCheckoutButtonPress: (item: IFeedItemState) => void
}


class FeedView extends React.Component<IProps> {

	handleBadgeClick(item: IFeedItemState) {
		this.props.handleBadgeClick(item)
	}

	handleFriendsTherePress(item: IFeedItemState) {
		this.props.handleParticipantsPress(item)
	}

	handleInvitePress(item: IFeedItemState) {
		this.props.handleSharePress(item)
	}

	handlePlayButtonPress(item: IFeedItemState) {
		this.props.handlePlayButtonPress(item)
	}


	handleCommentButtonPress(item: IFeedItemState){
		this.props.handleCommentButtonPress(item)
	}

	constructor(props: IProps) {
		super(props);
	}

    componentDidMount(): void {
        
    }

  
    render(): React.ReactNode {
		return(
			<BallerzSafeAreaView>
				<FlatList
					data={this.props.feedState.items}
					style={{backgroundColor: globalStyles.global.screenBackgroundColor}}
					renderItem={({item, index}) => {
						return(
							<FeedItemView
								feedItem={item}
								handleBadgeClick={() => {this.handleBadgeClick(item)}}
								handleFriendsTherePress={() => {this.handleFriendsTherePress(item)}}
								handleInvitePress={async(item) => {this.handleInvitePress(item)}}
								handlePlayButtonPress={() => {this.handlePlayButtonPress(item)}}
								onPressCommentButton={() => {this.handleCommentButtonPress(item)}}
								handleCheckoutButtonPress={() => {this.props.handleCheckoutButtonPress(item)}}
							/>
						)
					}}
					extraData={this.props.feedState.items}
				/>
			</BallerzSafeAreaView>
		)
    }
}


export default FeedView;