import React from "react";
import { FeedContext, IFeedContext } from "../../controllers/feed/provider";
import FeedView from "../../views/feed";
import { IFeedItemState} from "../../app/features/feed/slice/interface";
import IFeedScreen, { IFeedScreenNavigationController } from "./interface";
import { Modal, View, Text, SafeAreaView, Alert } from "react-native";


export interface IFeedScreenPropsWithoutNavigation {

}

export interface IFeedScreenProps extends IFeedScreenPropsWithoutNavigation{
    navigationController: IFeedScreenNavigationController
}

interface IFeedScreenState{
    modalVisible: boolean
}


export class FeedScreen extends React.Component<IFeedScreenProps, IFeedScreenState> implements IFeedScreen{

    navigationController: IFeedScreenNavigationController = this.props.navigationController;

    state = {
        modalVisible: false,
    }
    
    static contextType = FeedContext
    constructor(props: IFeedScreenProps){
        super(props);
    }
    context: React.ContextType<typeof FeedContext> = {} as IFeedContext
    componentDidMount(): void {
        this.getFeed();
    }

    getFeed() {
        this.context.controller.getFeed()
    }

    handleBadgeClick = (feedItem: IFeedItemState): void => {
        this.viewBadgeList(feedItem.badges)
    }

    handleFriendsTherePress(feedItem: IFeedItemState): void {
        console.warn("Feed screen handle friends there press " + `${this.props}`)
        // this.navigationController.goToAttendantsScreen(feedItem.attendants)
        this.viewFriendsThere(feedItem)
    }

    handleInvitePress(feedItem: IFeedItemState): void {
        this.displayNoFriendsToInviteModal()
        console.error("jjj")
    }

    viewBadgeList(badgeList: IFeedItemState['badges']): void {
        this.navigationController.goToBadgeListScreen(badgeList)
    }

    viewFriendsThere(feedItem: IFeedItemState): void {
        const friendsThereList = feedItem.friendsThere
        if(friendsThereList.length>0){
            this.navigationController.goToAttendantsScreen(feedItem.friendsThere)
        }else{
            this.displayNoFriendsHereModal()
        }
    }
    
    private displayNoFriendsHereModal(): void {
        console.error("No friends here")
        this.showNoFriendsAlert()
    }

    private displayNoFriendsToInviteModal(): void {
        this.showNoFriendsAlert()
    }

    showNoFriendsAlert(){
        Alert.alert(
          'Fais toi des amis',
          "Vous devez avoir des amis pour être au courant lorsqu'ils jouent",
          [
              { text: 'Non, merci', onPress: () => console.log('Non, merci'), style: 'destructive' },
              { text: 'Ajouter des amis', onPress: () => console.log('Ajouter des amis'), style: 'cancel' },
          ],
          { cancelable: false }
        );
    };

    render() {
        return (
            <View>
                <FeedView
                    feedState={this.context.feedState}
                    handleBadgeClick={(item) => {this.handleBadgeClick(item)}}
                    handleFriendsTherePress={(item) => {this.handleFriendsTherePress(item)}}
                    handleInvitePress={(item) => {this.handleInvitePress(item)}}
                />
                <Modal
                    visible={this.state.modalVisible}
                >
                    <SafeAreaView>
                        <Text>
                            NoFreidns here
                        </Text>
                    </SafeAreaView>
                </Modal>
            </View>
        )
    }
}