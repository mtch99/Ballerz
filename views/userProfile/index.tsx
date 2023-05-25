import React from "react"
import { View, Text, ScrollView, ImageSourcePropType } from "react-native"
import { IUserProfileViewProps } from "../../screens/userProfile"
import { styles } from "./styles"
import { HeaderView } from "./profileHeader"
import BallerzHeaderView from "../../components/header"
import { BadgeListView } from "./badges"
import PictresView from "./pictures"
import GamesListView from "./games"
import { IUserProfileState } from "../../app/features/types"
import BallerzSafeAreaView from "../safeArea"
import { getProfilePicUri } from "../../screens/utils/ImagePicker"
import ProfileViewHeader from "./screenHeader"






export class UserProfileView extends React.Component<IUserProfileViewProps, IProfileViewState>{

    async onPressAdd(): Promise<void> {
        console.warn("onPressAdd")
        this.props.onPressAddButton({...this.props})
    }

    state = {
        profilePicSource: {uri:"123"}, 
    }

    componentDidMount(): void {
        console.log(this.props.isFriend)
        getProfilePicUri(this.props.id).then(uri => {
            if(uri){
                this.setState({profilePicSource: {uri}})
            }
        })

    }

    render(){
        return(
            <BallerzSafeAreaView
            >
                <>
                <ProfileViewHeader 
                    username={this.props.username} 
                    goBack={this.props.goBack}                
                />
                <HeaderView
                    username={this.props.username}
                    friendsList={this.props.friends}
                    profilePicSource={this.state.profilePicSource}
                    isFriend={this.props.isFriend}
                    onPressFriendsNumber={this.props.onPressFriendsNumber}
                    friendshipRequestSent={this.props.friendshipRequestSent}
                    onPressAddButton={this.onPressAdd.bind(this)}
                />
                {/* <BadgeListView
                    badgeList={this.props.badges}
                /> */}
                {/* <PictresView
                    pictureUriList={['../../assets/profilePic', '../../assets/dunkPic']}
                /> */}
                <GamesListView
                    gameList={this.props.games}
                    onPressFriendsThere={this.props.onPressFriendsNumber}
                    onPressGameAttendants={this.props.onPressFriendsNumber}
                />
                </>
            </BallerzSafeAreaView>
        )
    }
}



export interface IProfileViewState {
    profilePicSource: ImageSourcePropType
}

export class MyProfileView extends React.Component<IUserProfileViewProps, IProfileViewState> {
    state = {
        profilePicSource: require('../../assets/profilePic.jpg'), 
    }

    componentDidMount(): void {
        getProfilePicUri(this.props.id).then(uri => {
            if(uri){
                this.setState({profilePicSource: {uri}})
            }
        })
    }
    render(){
        return(
            <BallerzSafeAreaView>
                <>
                <BallerzHeaderView
                    title="Profile"
                    leftButton={<></>}
                    rightButton={<></>}
                />
                <HeaderView
                    username={this.props.username}
                    friendsList={this.props.friends}
                    // profilePicUri={'../../assets/profilePic'}
                    profilePicSource={this.state.profilePicSource}
                    isFriend={this.props.isFriend}
                    onPressFriendsNumber={this.props.onPressFriendsNumber}
                    friendshipRequestSent={this.props.friendshipRequestSent}
                    onPressAddButton={() => {}}
                    myProfile={true}
                />
                <GamesListView
                        gameList={this.props.games}
                        onPressFriendsThere={this.props.onPressFriendsNumber}
                        onPressGameAttendants={this.props.onPressFriendsNumber}
                />
                </>

            </BallerzSafeAreaView>
        )
    }
}