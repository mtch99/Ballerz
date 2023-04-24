import React, { ContextType } from "react";
import FeedView from "../../views/feed";
import { IFeedItemState, IFeedState} from "../../app/features/feed/slice/interface";
import IFeedScreen, { IFeedScreenNavigationController, IPostCommentInput } from "./interface";
import { Modal, View, Text, SafeAreaView, Alert } from "react-native";
import IFeedController from "../../controllers/feed/interface";
import { ICheckinEventPayload, ICheckinInput, ICommentInput } from "../../domain/use-cases/feed/interface";
import { AppContext, IAppContext } from "../../controllers/provider";
import { globalStyles } from "../../views/styles";
import FindYourFriendsBottomSheetView from "../../views/makeFriends/findYourFriendsBottomSheet";
import { IScreenState, Screen } from "../interface";


export interface IFeedScreenPropsWithoutNavigation {

}

export interface IFeedScreenProps extends IFeedScreenPropsWithoutNavigation{
    navigationController: IFeedScreenNavigationController
}

interface IFeedScreenState extends IScreenState{
    modalVisible: boolean
}


export class FeedScreen extends Screen<IFeedScreenProps, IFeedScreenState> implements IFeedScreen{

    navigationController: IFeedScreenNavigationController = this.props.navigationController;
    
    state = {
        modalVisible: false,
        loading: false
    }

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext
    constructor(props: IFeedScreenProps){
        super(props);
        this.getFeed = this.getFeed.bind(this)
    }

    // Data retrieved on focus, managed by the navigator screen wrapper
    componentDidMount(): void {

    }

    getFeed() {
        this.context.feedController.getFeed(this.context.authState.user?.email)
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
        const userProfile = this.context.authState.profile
        if(this.state.loading){
            console.error("iuhodhdoihwso")
            return;
        } 
        if(userProfile){
            const input: ICheckinInput = {
                id: feedItem.id,
                attendance: {
                    arrivalDateTime: new Date(feedItem.startingTime),
                    departureDateTime: new Date(feedItem.endingTime),
                    userProfileData: userProfile
                },
                placeData: feedItem.place
            }
            this.makeRequest(this.context.feedController.checkIn(input))
        } 
        else {
            this.handleNoUserProfile()
        }
    }

    isAttending(feedItem: IFeedItemState): boolean {
        const {attendants} = feedItem
		const userFoundInAttendants = attendants.find(attendant => (attendant.userProfileData.id == this.context.authState.profile?.id))
		return userFoundInAttendants?true:false 
    }

    handleCheckoutButtonPress(feedItem: IFeedItemState): void {
        const userProfile = this.context.authState.profile
        if(userProfile){
            const attendanceToDelete = feedItem.attendants.find(attendance => attendance.userProfileData.id == userProfile.id)
            if(attendanceToDelete){
                console.log(JSON.stringify(attendanceToDelete))
                this.context.feedController.checkOut({
                    feedItemID: feedItem.id,
                    attendanceID: attendanceToDelete.id,
                    userProfile
                })
            }
        } 
        else {
            this.handleNoUserProfile()
        }
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
                badges: [],
                isFriend: undefined
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


    render() {
        return (
                <FeedView
                    feedState={this.context.feedState}
                    handleBadgeClick={(item) => {this.handleBadgeClick(item)}}
                    handleFriendsTherePress={(item) => {this.handleFriendsTherePress(item)}}
                    handleInvitePress={(item) => {this.handleInvitePress(item)}}
                    // handlePlayButtonPress={(item) => {this.handlePlayButtonPress(item)}}
                    handleCommentButtonPress={(input: IFeedItemState) => {this.handleCommentButtonPress(input)}}
                    handlePlayButtonPress={this.handlePlayButtonPress.bind(this)}
                    handleCheckoutButtonPress={this.handleCheckoutButtonPress.bind(this)}
                />
        )
    }


    handleNoUserProfile(){
        Alert.alert(
            "Créez votre profile",
            "Vous devez céer un profile pour signaler votre présence sur un terrain",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            { cancelable: false }
        )
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
}