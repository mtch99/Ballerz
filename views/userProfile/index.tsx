import React from "react"
import { View, Text, ScrollView } from "react-native"
import { IUserProfileViewProps } from "../../screens/userProfile"
import { styles } from "./styles"
import { HeaderView } from "./header"
import BallerzHeaderView from "../header"
import { BadgeListView } from "./badges"
import PictresView from "./pictures"
import GamesListView from "./games"
import { IUserProfileState } from "../../app/features/types"
import BallerzSafeAreaView from "../safeArea"





export class UserProfileView extends React.Component<IUserProfileViewProps>{

    async onPressAdd(): Promise<void> {
        console.warn("onPressAdd")
        this.props.onPressAddButton({...this.props})
    }


    render(){
        return(
            <ScrollView
                style={styles.container}
            >
                <HeaderView
                    username={this.props.username}
                    friendsList={this.props.friends}
                    profilePicUri={'../../assets/profilePic'}
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
                />
            </ScrollView>
        )
    }
}




export class MyProfileView extends React.Component<IUserProfileViewProps> {
    render(){
        return(
            <BallerzSafeAreaView>
                <>
                <BallerzHeaderView
                    title="Profile"
                />
                <HeaderView
                    username={this.props.username}
                    friendsList={this.props.friends}
                    profilePicUri={'../../assets/profilePic'}
                    isFriend={this.props.isFriend}
                    onPressFriendsNumber={this.props.onPressFriendsNumber}
                    friendshipRequestSent={this.props.friendshipRequestSent}
                    onPressAddButton={() => {}}
                    myProfile={true}
                />
                <GamesListView
                        gameList={this.props.games}
                />
                </>

            </BallerzSafeAreaView>
        )
    }
}