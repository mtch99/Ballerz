import React, { Component, ReactElement } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { IFeedItemState, IFeedState } from "../../../app/features/feed/slice/interface";
import { Thasadith_400Regular } from "@expo-google-fonts/dev";
import { ActionsContainer } from "./Bottom/Actions/actionsContainer";
import Bottom from "./Bottom";
import Header from "./Header";

interface IFeedViewProps{
  feedItem: IFeedItemState;
}

export const FeedItem:React.FC<IFeedViewProps> = (props) => {

    const feedItem: IFeedItemState = props.feedItem

    return GoodAlignment(feedItem)
}

const badAlignmenetStyleSheet = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    width: 375,
    height: 114
  },
  header: {
    width: 375,
    height: 22
  },
  placeNameContainer: {
    width: 375,
    height: 22,
    backgroundColor: "#E6E6E6"
  },
  placeName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6,
    marginLeft: 8
  },
  bodyLeftContainer: {
    width: 68,
    height: 60,
    backgroundColor: "#E6E6E6"
  },
  playerNumContainer: {
    width: 68,
    height: 30,
    backgroundColor: "#E6E6E6",
    alignSelf: "center"
  },
  playersNumText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 17,
    marginTop: 5,
    marginLeft: 6
  },
  playersText1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 11,
    marginLeft: 26
  },
  playersTextContainer: {
    flex: 1,
    justifyContent: "center"
  },
  badgeNumContainer: {
    width: 68,
    height: 30,
    backgroundColor: "#E6E6E6"
  },
  badgeNumText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 17,
    marginTop: 5,
    marginLeft: 6
  },
  playersText3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 11,
    marginLeft: 26
  },
  BadgeTextContainer: {
    flex: 1,
    justifyContent: "center"
  },
  dateTimeContatiner: {
    width: 137,
    height: 48,
    backgroundColor: "#E6E6E6",
    marginTop: 6
  },
  dayText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center"
  },
  timeContainer: {
    width: 132,
    height: 29,
    backgroundColor: "#E6E6E6",
    marginTop: 19,
    marginLeft: 5
  },
  startingHourText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 17,
    marginTop: 2
  },
  trait_separator: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 22,
    marginTop: -2,
    marginLeft: 51
  },
  startingHourTextColumn: {
    width: 51,
    marginTop: 3,
    marginLeft: 15
  },
  endingHourText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginLeft: 80
  },
  endingHourTextContainer: {
    flex: 1,
    justifyContent: "center"
  },
  bodyLeftContainerRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 38,
    marginRight: 132
  },
  bottomContainer: {
    width: 375,
    height: 28,
    backgroundColor: "#E6E6E6",
    flexDirection: "row"
  },
  actionsContainer: {
    width: 127,
    height: 28,
    backgroundColor: "#E6E6E6"
  },
  jouer4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6,
    marginLeft: 5
  },
  commentIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 16,
    marginLeft: 47
  },
  inviter: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 75
  },
  friendsThereContainer: {
    width: 145,
    height: 15,
    backgroundColor: "#E6E6E6",
    marginLeft: 75,
    marginTop: 8
  },
  friendsThereText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 11,
    marginTop: -1,
    marginLeft: 2
  },
  actionsContainerRow: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 21
  }
});

function BadAlignment(feedItem: IFeedItemState): ReactElement{

  return(
    <View style={badAlignmenetStyleSheet.container}>
      <View style={badAlignmenetStyleSheet.header}>
        <View style={badAlignmenetStyleSheet.placeNameContainer}>
          <Text style={badAlignmenetStyleSheet.placeName}>{feedItem?.place.name}</Text>
        </View>
      </View>
      <View style={badAlignmenetStyleSheet.bodyLeftContainerRow}>
        <View style={badAlignmenetStyleSheet.bodyLeftContainer}>
          <View style={badAlignmenetStyleSheet.playerNumContainer}>
            <Text style={badAlignmenetStyleSheet.playersNumText}>20</Text>
            <View style={badAlignmenetStyleSheet.playersTextContainer}>
              <Text style={badAlignmenetStyleSheet.playersText1}>joueurs</Text>
            </View>
          </View>
          <View style={badAlignmenetStyleSheet.badgeNumContainer}>
            <Text style={badAlignmenetStyleSheet.badgeNumText}>0</Text>
            <View style={badAlignmenetStyleSheet.BadgeTextContainer}>
              <Text style={badAlignmenetStyleSheet.playersText3}>badges</Text>
            </View>
          </View>
        </View>
        <View style={badAlignmenetStyleSheet.dateTimeContatiner}>
          <Text style={badAlignmenetStyleSheet.dayText}>Mardi</Text>
          <View style={badAlignmenetStyleSheet.timeContainer}>
            <View style={badAlignmenetStyleSheet.startingHourTextColumn}>
              <Text style={badAlignmenetStyleSheet.startingHourText}>15:00</Text>
              <Text style={badAlignmenetStyleSheet.trait_separator}>-</Text>
            </View>
            <View style={badAlignmenetStyleSheet.endingHourTextContainer}>
              <Text style={badAlignmenetStyleSheet.endingHourText}>15:00</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={badAlignmenetStyleSheet.bottomContainer}>
        <View style={badAlignmenetStyleSheet.actionsContainerRow}>
          <View style={badAlignmenetStyleSheet.actionsContainer}>
            <Text style={badAlignmenetStyleSheet.jouer4}>jouer</Text>
            <Icon name="commenting-o" style={badAlignmenetStyleSheet.commentIcon}></Icon>
            <Text style={badAlignmenetStyleSheet.inviter}>inviter</Text>
          </View>
          <View style={badAlignmenetStyleSheet.friendsThereContainer}>
            <Text style={badAlignmenetStyleSheet.friendsThereText}>
              username1 et 2 autres y vont
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}



function GoodAlignment(feedItem: IFeedItemState): ReactElement {
  return (
    <View style={goodAlignmentStyle.container}>
      <Header
        text={feedItem?(feedItem.place.name):""}
      />
      <View style={goodAlignmentStyle.bodyLeftContainerRow}>
        <View style={goodAlignmentStyle.bodyLeftContainer}>
          <View style={goodAlignmentStyle.playerNumContainer}>
            <Text style={goodAlignmentStyle.playersNumText1}>20</Text>
            <Text style={goodAlignmentStyle.playersText1}>joueurs</Text>
          </View>
          <View style={goodAlignmentStyle.badgeNumContainer}>
            <Text style={goodAlignmentStyle.playersNumText3}>20</Text>
            <View style={goodAlignmentStyle.playersNumText3Filler}>
              <Text style={goodAlignmentStyle.playersText3}>joueurs</Text>
            </View>
          </View>
        </View>
        <View style={goodAlignmentStyle.dateTimeContatiner}>
          <Text style={goodAlignmentStyle.mardi}>Mardi</Text>
          <View style={goodAlignmentStyle.timeContainer}>
            <View style={goodAlignmentStyle.startingHourTextColumn}>
              <Text style={goodAlignmentStyle.startingHourText}>15:00</Text>
              <Text style={goodAlignmentStyle.trait_separator}>-</Text>
            </View>
            <View style={goodAlignmentStyle.startingHourTextColumnFiller}>
              <Text style={goodAlignmentStyle.endingHourText1}>15:00</Text>
            </View>
          </View>
        </View>
      </View>
      <Bottom/>
    </View>
  );
}

const goodAlignmentStyle = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    width: 375,
    height: 114
  },
  header: {
    width: 375,
    height: 22
  },
  placeNameContainer: {
    width: 375,
    height: 22,
    backgroundColor: "#E6E6E6"
  },
  placeName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6,
    marginLeft: 8
  },
  bodyLeftContainer: {
    width: 68,
    height: 60,
    backgroundColor: "#E6E6E6"
  },
  playerNumContainer: {
    width: 68,
    height: 30,
    backgroundColor: "#E6E6E6",
    alignSelf: "center"
  },
  playersNumText1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 17,
    marginTop: 5,
    marginLeft: 6
  },
  playersText1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 11,
    marginTop: 3,
    marginLeft: 26
  },
  badgeNumContainer: {
    width: 68,
    height: 30,
    backgroundColor: "#E6E6E6"
  },
  playersNumText3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 17,
    marginTop: 5,
    marginLeft: 6
  },
  playersText3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 11,
    marginLeft: 26
  },
  playersNumText3Filler: {
    flex: 1,
    justifyContent: "center"
  },
  dateTimeContatiner: {
    width: 137,
    height: 48,
    backgroundColor: "#E6E6E6",
    marginTop: 6
  },
  mardi: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center"
  },
  timeContainer: {
    width: 132,
    height: 29,
    backgroundColor: "#E6E6E6",
    marginTop: 19,
    marginLeft: 5
  },
  startingHourText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 17,
    marginTop: 2
  },
  trait_separator: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 22,
    marginTop: -2,
    marginLeft: 51
  },
  startingHourTextColumn: {
    width: 51,
    marginTop: 3,
    marginLeft: 15
  },
  endingHourText1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginLeft: 80
  },
  startingHourTextColumnFiller: {
    flex: 1,
    justifyContent: "center"
  },
  bodyLeftContainerRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 38,
    marginRight: 132
  },
  rect2: {
    width: 375,
    height: 28,
    backgroundColor: "#E6E6E6",
    flexDirection: "row"
  },
  actionsContainer: {
    width: 127,
    height: 28,
    backgroundColor: "#E6E6E6"
  },
  jouer4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6,
    marginLeft: 5
  },
  commentIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 16,
    marginLeft: 47
  },
  inviter: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 75
  },
  friendsThereContainer: {
    width: 145,
    height: 15,
    backgroundColor: "#E6E6E6",
    marginLeft: 75,
    marginTop: 8
  },
  friendsThereText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 11,
    marginTop: -1,
    marginLeft: 2
  },
  actionsContainerRow: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 21
  }
});



export default FeedItem






