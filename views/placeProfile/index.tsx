import React from "react"
import { View, Text, ScrollView } from "react-native"
import { IPlaceProfileState } from "../../app/features/place/types"
import { styles } from "./styles"
import { IPlaceProfileViewProps } from "../../screens/placeProfile"
import BallerzSafeAreaView from "../safeArea"
import { style } from "../feed/feed-item/styles"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { SectionList, SectionListProps } from "react-native"
import { IFeedItemState } from "../../app/features/feed/slice/interface"
import { globalStyles } from "../styles"
import { FlatList } from "react-native-gesture-handler"
import FeedItemView from "../feed/feed-item"
import ListItemButton from "../../components/Buttons/ListItemButton"




export class PlaceProfileView extends React.Component<IPlaceProfileViewProps>{

    state: IPlaceProfileState = {
        games: [],
        id: "",
        name: "",
        address: ""
    }

    sectionListProps(games: IPlaceProfileState['games']): SectionListProps<IFeedItemState> {
        return (
            {
                sections: [
                    {
                        data: games,
                        key: "Parties",
                        extraData: this.props.games,
                        title: "Parties"
                    }
                ],
                renderItem: ({ item }) => (
                    <FeedItemView
                      feedItem={item}
                      handleBadgeClick={() => {}}
                      onPressCommentButton={() => {}}
                      handleCheckoutButtonPress={()=> {}}
                      handlePlayButtonPress={() => {}}
                      handleFriendsTherePress={() => {}}
                      handleInvitePress={() => {}}
                    />
                )
            }
        )
        
    }


    componentDidMount(): void {
    }

    componentDidUpdate(prevProps: Readonly<IPlaceProfileViewProps>, prevState: Readonly<{}>, snapshot?: any): void {
    }

    render(): React.ReactNode {
        return(
            <BallerzSafeAreaView
                // style={styles.scrollViewContainer}
            >
                <>
                    <View style={style.container}>
                        <View
                            style={styles.profileDataContainer}
                        >
                            <View
                                style={{flexDirection: "row", ...styles.usernameContainer}}
                            >
                                <MaterialIcons
                                    name="place"
                                    size={17}
                                    color="grey"
                                />
                                <Text style={styles.usernameText}>
                                    {this.props.name}
                                </Text>
                            </View>
                            <Text style={{color: 'lightgrey'}}>
                                {this.props.address}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{flexDirection: "row", flexGrow: 1, marginHorizontal: 17, marginBottom: 10, justifyContent: "space-between"}}
                    >

                        <Text
                        style={{fontSize: 24, color: '#595085',}}
                        >
                            Parties
                        </Text>

                        <ListItemButton
                            onPress={() => {this.props.onPressPlayHere()}}
                            title="jouer ici"
                            selected={false}
                        />

                    </View>
                    <SectionList
                    {...this.sectionListProps(this.props.games)}
                    />
                </>
            </BallerzSafeAreaView>
        )
    }
}

