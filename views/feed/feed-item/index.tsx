import React, { Component, ReactElement } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { IFeedItemState, IFeedState } from "../../../app/features/feed/slice/interface";
import { Thasadith_400Regular } from "@expo-google-fonts/dev";
import { ActionsContainer } from "./Bottom/Actions/actionsContainer";
import Bottom from "./Bottom";
import Header from "./Header";
import { Body } from "./Body";
import IFeedScreen from "../../../screens/feed/interface";

interface IFeedViewProps{
  feedItem: IFeedItemState
  handleBadgeClick: IFeedScreen['handleBadgeClick']
}

export class FeedItem extends React.Component<IFeedViewProps>{

	feedItem: IFeedItemState = props.feedItem
	handleBadgeClick = props.handleBadgeClick
	
	constructor(props: IFeedViewProps) {
		super(props);
		// onBadgeClick.bind(this)
	}

	onBadgeClick(){
		// console.warn(this)
		handleBadgeClick(feedItem)
	}

	render(): React.ReactNode {
		return (

	  		<View style={style.container}>
	  		  <Header
	  		    text={feedItem?(feedItem.place.name):""}
	  		  />
	  		  <Body
	  		    onBadgeClick={() => {onBadgeClick()}}
	  		    badgeList={feedItem.badges}
	  		  />
	  		  <Bottom/>
	  		</View>
		)
	}


}


export function aaa(props: IFeedViewProps){
	
	const feedItem = props.feedItem
	const handleBadgeClick = props.handleBadgeClick
	const onBadgeClick= () => {
		// console.warn(this)
		handleBadgeClick(feedItem)
	}


		return (

	  		<View style={style.container}>
	  		  <Header
	  		    text={feedItem?(feedItem.place.name):""}
	  		  />
	  		  <Body
	  		    onBadgeClick={() => {onBadgeClick()}}
	  		    badgeList={feedItem.badges}
	  		  />
	  		  <Bottom/>
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



export default aaa






