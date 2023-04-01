import React, { ContextType } from "react";
import FeedView from "../../views/feed";
import { IFeedItemState, IFeedState} from "../../app/features/feed/slice/interface";
import IFeedScreen, { IFeedScreenNavigationController, IPostCommentInput } from "./interface";
import { Modal, View, Text, SafeAreaView, Alert } from "react-native";
import IFeedController from "../../controllers/feed/interface";
import { ICommentInput } from "../../domain/use-cases/feed/interface";
import { AppContext, IAppContext } from "../../controllers/provider";
import { globalStyles } from "../../views/styles";
import FindYourFriendsBottomSheetView from "../../views/makeFriends/findYourFriendsBottomSheet";


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

    private feedController: IFeedController = {} as IFeedController
    private feed: IFeedState = {items: []} 
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext
    constructor(props: IFeedScreenProps){
        super(props);
        this.getFeed = this.getFeed.bind(this)
    }

    componentDidMount(): void {
        this.feedController = this.context.feedController
        this.getFeed();
        this.feed = this.context.feedState
        console.log(`Feed Screen just mounted \n
            authState: ${JSON.stringify(this.context.authState)}`
        )
    }

    getFeed() {
        this.feedController.getFeed()
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
                username: "moi",
                badges: []
            }
        }).then(res => {
            if(res == true){
                this.showXthGameThisMobthAlert()
            }
        }).catch(err => {
            // console.error(err)
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
                username: "moi",
                badges: []
            },
            text: input.commentText
        }
        // this.feedController.comment(commentInput)
    }


    handleCommentButtonPress(input: IFeedItemState): void {
        this.navigationController.goToCommentScreen(input)
    }


    handlePressMakeFriends(): void {
        this.navigationController.goToMakeFriendsScreen()
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
              { text: 'Non, merci', onPress: () => {}, style: 'destructive' },
              { text: 'Ajouter des amis', onPress: () =>  this.handlePressMakeFriends(), style: 'cancel' },
          ],
          { cancelable: false }
        );
    };
    

    private showXthGameThisMobthAlert(){
        Alert.alert(
            'Nice!!!',
            "C'est votre 4ième participation ce mois. Vous êtes à une participation de gagner un nouveau badge 🔜🙌🏽",
            [
                { text: 'Cool', onPress: () => {}, style: 'cancel' },
            ],
            { cancelable: false }
          );
    }



    render() {
        return (
                <FeedView
                    feedState={this.context.feedState}
                    handleBadgeClick={(item) => {this.handleBadgeClick(item)}}
                    handleFriendsTherePress={(item) => {this.handleFriendsTherePress(item)}}
                    handleInvitePress={(item) => {this.handleInvitePress(item)}}
                    handlePlayButtonPress={(item) => {this.handlePlayButtonPress(item)}}
                    handleCommentButtonPress={(input: IFeedItemState) => {this.handleCommentButtonPress(input)}}
                />
        )
    }
}