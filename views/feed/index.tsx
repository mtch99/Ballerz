import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import { IFeedState } from "../../app/features/feed/slice/interface";


interface IProps {
    feedState: IFeedState
}


class FeedView extends React.Component<IProps> {

    componentDidMount(): void {
        
    }
  
    render(){
        return (
            <View style={styles.container}>
              <View style={styles.rectStack}>
                <View style={styles.rect}>
                  <View style={styles.rect3Stack}>
                    <View style={styles.rect3}>
                      <Text style={styles.loremIpsum}>20</Text>
                    </View>
                    <View style={styles.rect4}>
                      <View style={styles.rect5}>
                        <Text style={styles.joueurs}>joueurs</Text>
                        <View style={styles.loremIpsum2Row}>
                          <Text style={styles.loremIpsum2}>0</Text>
                          <Text style={styles.badges}>badges</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.rect10}>
                      <View style={styles.iconRow}>
                        <FeatherIcon
                          name="user-check"
                          style={styles.icon}
                        ></FeatherIcon>
                        <FontAwesomeIcon
                          name="comment-o"
                          style={styles.icon1}
                        ></FontAwesomeIcon>
                        <MaterialIconsIcon
                          name="group"
                          style={styles.icon2}
                        ></MaterialIconsIcon>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.rect2}>
                  <Text style={styles.byfarCentreSportif}>Byfar centre sportif</Text>
                </View>
                <View style={styles.rect6}>
                  <Text style={styles.mardi1207}>mardi 12/07</Text>
                  <View style={styles.rect7StackRow}>
                    <View style={styles.rect7Stack}>
                      <View style={styles.rect7}></View>
                      <Text style={styles.loremIpsum3}>15:00</Text>
                    </View>
                    <Text style={styles.loremIpsum5}>-</Text>
                    <View style={styles.rect9}>
                      <Text style={styles.loremIpsum7}>18:00</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text>{JSON.stringify(this.props.feedState)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 0,
    left: 0,
    width: 375,
    height: 155,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect3: {
    top: 0,
    left: 0,
    width: 375,
    height: 65,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 32,
    marginLeft: 53
  },
  rect4: {
    top: 5,
    left: 2,
    width: 188,
    height: 66,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect5: {
    width: 188,
    height: 62,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 3
  },
  joueurs: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6,
    marginLeft: 87
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 25
  },
  badges: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 4,
    marginTop: 7
  },
  loremIpsum2Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 51,
    marginRight: 73
  },
  rect10: {
    top: 68,
    left: 0,
    width: 375,
    height: 33,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  icon: {
    color: "rgba(229,145,42,1)",
    fontSize: 30,
    opacity: 0.33,
    height: 30,
    width: 30,
    marginTop: 2
  },
  icon1: {
    color: "rgba(229,145,42,1)",
    fontSize: 30,
    opacity: 0.33,
    height: 30,
    width: 30,
    marginLeft: 9
  },
  icon2: {
    color: "rgba(229,145,42,1)",
    fontSize: 30,
    opacity: 0.33,
    height: 30,
    width: 30,
    marginLeft: 7,
    marginTop: 3
  },
  iconRow: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 256,
    marginLeft: 13
  },
  rect3Stack: {
    width: 375,
    height: 101,
    marginTop: 29
  },
  rect2: {
    top: 0,
    left: 2,
    width: 375,
    height: 32,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  byfarCentreSportif: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 8,
    marginLeft: 11
  },
  rect6: {
    top: 20,
    left: 188,
    width: 188,
    height: 80,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  mardi1207: {
    fontFamily: "roboto-900",
    color: "#121212",
    fontSize: 17,
    marginTop: 8,
    marginLeft: 37
  },
  rect7: {
    top: 0,
    left: 0,
    width: 72,
    height: 37,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  loremIpsum3: {
    top: 3,
    left: 12,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 27
  },
  rect7Stack: {
    width: 79,
    height: 37
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    letterSpacing: 0,
    fontSize: 25,
    marginLeft: 5,
    marginTop: 3
  },
  rect9: {
    width: 72,
    height: 37,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 4,
    marginTop: 2
  },
  loremIpsum7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 27,
    marginTop: 2,
    marginLeft: 3
  },
  rect7StackRow: {
    height: 39,
    flexDirection: "row",
    marginTop: 3,
    marginRight: 21
  },
  rectStack: {
    width: 377,
    height: 155,
    marginTop: 170
  }
});

export default FeedView;
