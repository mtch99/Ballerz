import React from "react"
import { View, Text, ScrollView } from "react-native"
import { IUserProfileViewProps } from "../../screens/userProfile"
import { styles } from "./styles"
import { HeaderView } from "./header"
import { BadgeListView } from "./badges"
import PictresView from "./pictures"
import GamesListView from "./games"
import { IUserProfileState } from "../../app/features/types"





export class UserProfileView extends React.Component<IUserProfileViewProps>{

    state: IUserProfileState = {
        games: [],
        id: "",
        username: "",
        badges: []
    }


    componentDidMount(): void {
        // console.warn(`Mounting props: ${JSON.stringify(this.props)}`)
    }

    // componentDidUpdate(prevProps: Readonly<IUserProfileViewProps>, prevState: Readonly<{}>, snapshot?: any): void {
        // console.warn(`UserProfileView newProps: ${JSON.stringify(this.props.games)})`)
    // }

    render(){
        return(
            <ScrollView
                style={styles.container}
            >
                <HeaderView
                    username={this.props.username}
                    profilePicUri={'../../assets/profilePic'}
                />
                <BadgeListView
                    badgeList={this.props.badges}
                />
                <PictresView
                    pictureUriList={['../../assets/profilePic', '../../assets/dunkPic']}
                />
                <GamesListView
                    gameList={this.props.games}
                />
            </ScrollView>
        )
    }
}
