import React, { ContextType } from "react";
import { FeedContext, IFeedContext } from "../../controllers/feed/provider";
import FeedView from "../../views/feed";
import { IFeedItemState} from "../../app/features/feed/slice/interface";
import IFeedScreen, { IFeedScreenNavigationController, IPostCommentInput } from "./interface";
import { Modal, View, Text, SafeAreaView, Alert } from "react-native";
import IFeedController from "../../controllers/feed/interface";
import { ICommentInput } from "../../use-cases/feed/interface";


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
    private feedController: IFeedController = this.context.controller
    componentDidMount(): void {
        this.feedController = this.context.controller
        this.getFeed();
    }

    getFeed() {
        this.context.controller.getFeed()
    }

    handleBadgeClick = (feedItem: IFeedItemState): void => {
        this.viewBadgeList(feedItem.badges)
    }

    handleFriendsTherePress(feedItem: IFeedItemState): void {
        this.viewFriendsThere(feedItem)
    }

    handleInvitePress(feedItem: IFeedItemState): void {
        this.displayNoFriendsToInviteModal()
    }

    handlePlayButtonPress(feedItem: IFeedItemState): void {
        this.feedController.checkIn({
            id: feedItem.id,
            userProfile: {
                id: "moiId",
                username: "moi"
            }
        }).then(res => {
            if(res == true){
                this.showXthGameThisMobthAlert()
            }
        }).catch(err => {
            console.error(err)
        })
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

    
    postComment(input: IPostCommentInput): void{
        const commentInput: ICommentInput = {
            feedItemId: input.feedItem.id,
            author: {
                id: "moiId",
                username: "moi"
            },
            text: input.commentText
        }
        this.feedController.comment(commentInput)
    }

    handleCommentButtonPress(input: IFeedItemState): void {
        this.navigationController.goToCommentScreen(input)
    }
    
    private displayNoFriendsHereModal(): void {
        // console.error("No friends here")
        this.showNoFriendsAlert()
    }

    private displayNoFriendsToInviteModal(): void {
        this.showNoFriendsAlert()
    }

    private showNoFriendsAlert(){
        Alert.alert(
          'Fais toi des amis',
          "Vous devez être amis avec un joueur ppour voir les patie auxquelles il va participer",
          [
              { text: 'Non, merci', onPress: () => console.log('Non, merci'), style: 'destructive' },
              { text: 'Ajouter des amis', onPress: () => console.log('Ajouter des amis'), style: 'cancel' },
          ],
          { cancelable: false }
        );
    };

    private showXthGameThisMobthAlert(){
        Alert.alert(
            'Nice!!!',
            "C'est votre 4ième participation ce mois. Vous êtes à une participation de gagner un badge 🔜🙌🏽",
            [
                { text: 'Cool', onPress: () => console.log('Ajouter des amis'), style: 'cancel' },
            ],
            { cancelable: false }
          );
    }


    render() {
        return (
            <SafeAreaView
                style={{backgroundColor:"#14171A", flexGrow:1}}
            >
                <FeedView
                    feedState={this.context.feedState}
                    handleBadgeClick={(item) => {this.handleBadgeClick(item)}}
                    handleFriendsTherePress={(item) => {this.handleFriendsTherePress(item)}}
                    handleInvitePress={(item) => {this.handleInvitePress(item)}}
                    handlePlayButtonPress={(item) => {this.handlePlayButtonPress(item)}}
                    handleCommentButtonPress={(input: IFeedItemState) => {this.handleCommentButtonPress(input)}}
                />
                {/* <Modal
                    visible={this.state.modalVisible}
                >
                    <Text>
                        NoFreidns here
                    </Text>
                </Modal> */}
            </SafeAreaView>
        )
    }
}