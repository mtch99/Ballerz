import React from "react";
import {FlatList, SafeAreaView } from "react-native";
import { IFeedItemState, IFeedState } from "../../app/features/feed/slice/interface";
import FeedItemView from "./feed-item/index";
import IFeedScreen, { IPostCommentInput } from "../../screens/feed/interface";
import { globalStyles } from "../styles";


interface IProps {
    feedState: IFeedState
	handleBadgeClick: IFeedScreen['handleBadgeClick']
	handleFriendsTherePress: IFeedScreen['handleFriendsTherePress']
	handleInvitePress: IFeedScreen['handleInvitePress']
	handlePlayButtonPress: IFeedScreen['handlePlayButtonPress']
	handleCommentButtonPress: (item: IFeedItemState) => void
}


class FeedView extends React.Component<IProps> {

	handleBadgeClick(item: IFeedItemState) {
		this.props.handleBadgeClick(item)
	}

	handleFriendsTherePress(item: IFeedItemState) {
		this.props.handleFriendsTherePress(item)
	}

	handleInvitePress(item: IFeedItemState) {
		this.props.handleInvitePress(item)
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

	// componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>, snapshot?: any): void {
	// 	console.error(`FeedItemView updated: \n \n Pevious props: ${JSON.stringify(prevProps)}`)
	// }
  
    render(): React.ReactNode {
		return(
				<FlatList
					data={this.props.feedState.items}
					style={{backgroundColor: globalStyles.global.screenBackGroundColor}}
					renderItem={({item, index}) => {
						return(
							<FeedItemView
								feedItem={item}
								handleBadgeClick={() => {this.handleBadgeClick(item)}}
								handleFriendsTherePress={() => {this.handleFriendsTherePress(item)}}
								handleInvitePress={() => {this.handleInvitePress(item)}}
								handlePlayButtonPress={() => {this.handlePlayButtonPress(item)}}
								onPressCommentButton={() => {this.handleCommentButtonPress(item)}}
							/>
						)
					}}
					extraData={this.props.feedState.items}
				/>
		)
    }
}


export default FeedView;