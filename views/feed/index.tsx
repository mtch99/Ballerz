import React from "react";
import {FlatList, SafeAreaView } from "react-native";
import { IFeedItemState, IFeedState } from "../../app/features/feed/slice/interface";
import FeedItemView from "./feed-item/index";
import IFeedScreen from "../../screens/feed/interface";


interface IProps {
    feedState: IFeedState
	handleBadgeClick: IFeedScreen['handleBadgeClick']
	handleFriendsTherePress: IFeedScreen['handleFriendsTherePress']
	handleInvitePress: IFeedScreen['handleInvitePress']
}


class FeedView extends React.Component<IProps> {

	handleBadgeClick(item: IFeedItemState) {
		this.props.handleBadgeClick(item)
	}

	handleFriendsTherePress(item: IFeedItemState) {
		console.warn("FeedView" + `${JSON.stringify(this.props.feedState)}`)
		this.props.handleFriendsTherePress(item)
	}

	handleInvitePress(item: IFeedItemState) {
		this.props.handleInvitePress(item)
	}

	constructor(props: IProps) {
		super(props);
	}

    componentDidMount(): void {
        
    }
  
    render(): React.ReactNode {
		return(
				<FlatList
					data={this.props.feedState.items}
					renderItem={({item, index}) => {
						return(
							<FeedItemView
								feedItem={item}
								handleBadgeClick={() => {this.handleBadgeClick(item)}}
								handleFriendsTherePress={() => {this.handleFriendsTherePress(item)}}
								handleInvitePress={() => {this.handleInvitePress(item)}}
							/>
						)
					}}
					extraData={this.props.feedState.items}
					style={{backgroundColor: "#121212", flexGrow:1}}
				/>
		)
    }
}


export default FeedView;