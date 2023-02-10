import React from "react";
import {FlatList, SafeAreaView } from "react-native";
import { IFeedState } from "../../app/features/feed/slice/interface";
import FeedItemView from "./feed-item/index";


interface IProps {
    feedState: IFeedState
}


class FeedView extends React.Component<IProps> {

    componentDidMount(): void {
        
    }
  
    render(): React.ReactNode {
		return(
			<SafeAreaView>
				<FlatList
					data={this.props.feedState.items}
					renderItem={({item, index}) => {
						return(
							<FeedItemView
								feedItem={item}
							/>
						)
					}}
					extraData={this.props.feedState.items}
				/>
        {/** This component is used to test that the feedView renders correctly */}
				{/* <FeedItemView
					feedItem={this.props.feedState.items[0]}
				/> */}
			</SafeAreaView>
		)
    }
}


export default FeedView;
