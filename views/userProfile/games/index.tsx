import React from "react";
import { IGamesViewProps } from "../interface";
import { IFeedItemState } from "../../../app/features/feed/slice/interface";
import { FlatList, View, Text, SectionList, ScrollView } from "react-native";
import FeedItemView from "../../feed/feed-item";
import styles from "./styles"
import { IGameState } from "../../../app/features/types";


export default class GamesListView extends React.Component<IGamesViewProps> {

    gameList: IFeedItemState[]

    constructor(props: IGamesViewProps) {
        super(props);
        this.gameList = this.parseGameList(this.props.gameList)
    }


    render(): React.ReactNode {
        return(
            <View style={{flex:1}}>
                <Text style={styles.gamesText}>Partcipations ({this.props.gameList.length})</Text>
                    <FlatList
                        style={{flexGrow: 1}}
                        data={this.props.gameList}
                        extraData={this.props.gameList}
                        renderItem={({item}) => {
                            return(
                                <FeedItemView 
                                    feedItem={item} 
                                    handleBadgeClick={function (feedItem: IFeedItemState): void {
                                        throw new Error("Function not implemented.");
                                    } } 
                                    handleFriendsTherePress={this.props.onPressFriendsThere}
                                    handleInvitePress={async function (feedItem: IFeedItemState): Promise<void> {
                                        throw new Error("Function not implemented.");
                                    } } 
                                    handlePlayButtonPress={function (): void {
                                        throw new Error("Function not implemented.");
                                    } } 
                                    onPressCommentButton={function (): void {
                                        throw new Error("Function not implemented.");
                                    } }                       
                                    handleCheckoutButtonPress={() => {}}     
                                />
                            )
                        }}

                    />
            </View>
        )
    }


    private parseGameList(gameList: IGameState[]): IFeedItemState[]{
        return gameList
    }
}