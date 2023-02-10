import React, { Component, ReactElement } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { IFeedItemState, IFeedState } from "../../../app/features/feed/slice/interface";
import { Thasadith_400Regular } from "@expo-google-fonts/dev";
import { ActionsContainer } from "./Bottom/Actions/actionsContainer";
import Bottom from "./Bottom";
import Header from "./Header";
import { Body } from "./Body";

interface IFeedViewProps{
  feedItem: IFeedItemState;
}

export const FeedItem:React.FC<IFeedViewProps> = (props) => {

    const feedItem: IFeedItemState = props.feedItem

    return CreateFeedItem(feedItem)
}


function CreateFeedItem(feedItem: IFeedItemState): ReactElement {
  return (
    <View style={style.container}>
      <Header
        text={feedItem?(feedItem.place.name):""}
      />
      <Body
        badgeList={feedItem.badges}
      />
      <Bottom/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    width: 375,
    height: 114
  },
});



export default FeedItem






