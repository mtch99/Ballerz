import React, { ContextType } from "react";
import * as Sharing from 'expo-sharing';
import FeedView from "../../views/feed";
import { IFeedItemState, IFeedState} from "../../app/features/feed/slice/interface";
import IFeedScreen, { IFeedScreenNavigationController, IPostCommentInput } from "./interface";
import { Modal, View, Text, SafeAreaView, Alert, Share } from "react-native";
import IFeedController from "../../controllers/feed/interface";
import { ICheckinEventPayload, ICheckinInput, ICommentInput } from "../../domain/use-cases/feed/interface";
import { AppContext, IAppContext } from "../../controllers/provider";
import { globalStyles } from "../../views/styles";
import FindYourFriendsBottomSheetView from "../../views/makeFriends/findYourFriendsBottomSheet";
import { IScreenState, Screen } from "../interface";
import CommunityModal, {ModalProps} from 'react-native-modal';
import { IUserProfileData } from "../../domain/use-cases/types";

const betaAppUrl = "https://testflight.apple.com/join/cYonaub5"
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
        loading: false,
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
        this.context.feedController.getFeed(this.context.authState.profile?.id)
    }

    handleBadgeClick = (feedItem: IFeedItemState): void => {
        this.viewBadgeList(feedItem.badges)
    }

    handleParticipantsPress(feedItem: IFeedItemState): void {
        this.viewParticipants(feedItem)
    }

    async handleSharePress(feedItem: IFeedItemState): Promise<void>{
        try {
            const result = await Share.share({
                message:'Hey, Rejoins moi sur Ballerz pour être informé lorsque je vais jouer au basketball. \n\nBall is life 🔥',
			    title: betaAppUrl,
			    url: betaAppUrl
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
        // Sharing.shareAsync(betaAppUrl, {dialogTitle:"aioiwiodshiowdhi"})
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
        let result = false;
        attendants.forEach((attendant)=> {
            if(attendant.userProfileData.id){
                result = true
            }
        })
		return result 
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

    viewParticipants(feedItem: IFeedItemState): void {
        const attendants: IUserProfileData[] = []
        feedItem.attendants.forEach(attendance => {
            attendants.push(attendance.userProfileData)
        })
        this.navigationController.goToAttendantsScreen(attendants)
    }

    
    postComment(input: IPostCommentInput): void{
        const commentInput: ICommentInput = {
            feedItemId: input.feedItem.id,
            author: {
                id: "moiId",
                username: "moi",
                badges: [],
                isFriend: undefined,
                city: {
                    id: "",
                    name: ""
                }
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
                    handleParticipantsPress={(item) => {this.handleParticipantsPress.bind(this)(item)}}
                    handleSharePress={(item) => {return this.handleSharePress(item)}}
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
}




export interface ILoadingModalProps {
	isVisible: boolean;
    onPressOk: () => void;
}
export function CreatedGameModal(props: ILoadingModalProps){
	console.log(`LoadingScreen props: ${JSON.stringify(props)}`)
	return(
		<CommunityModal 
			isVisible={props.isVisible} 
			style={{ 
				backgroundColor: 'rgba(0, 0, 0, 0.5)', 
				margin: 0, 
				justifyContent: 'center' 
			}}
		>
            <View
                style={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}
            >
                <View
                    style={{
                        padding: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: "bold",
                            color: "black",
                        }}
                    >
                        Ball is life 🔥🔥🔥
                    </Text>

                </View>

            </View>
			{/* Your modal content here */}
		</CommunityModal>
	)
}