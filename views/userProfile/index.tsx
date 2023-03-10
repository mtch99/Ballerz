import React from "react"
import { View, Text } from "react-native"
import { IUserProfileState } from "../../app/features/userProfile/types"
import { IUserProfileViewProps } from "../../screens/userProfile"
import { styles } from "./styles"
import { HeaderView } from "./header"





export class UserProfileView extends React.Component<IUserProfileViewProps>{

    state: IUserProfileState = {
        games: [],
        id: "",
        username: "",
        badges: []
    }


    componentDidMount(): void {
        console.warn(`Mounting props: ${JSON.stringify(this.props)}`)
    }

    componentDidUpdate(prevProps: Readonly<IUserProfileViewProps>, prevState: Readonly<{}>, snapshot?: any): void {
        console.warn(`UserProfileView newProps: ${JSON.stringify(this.props)})`)
    }

    render(){
        return(
            <View
                style={styles.container}
            >
                {/* <View
                    style={styles.profilePictureContainer}
                /> */}
                <HeaderView
                    username={this.props.username}
                    profilePicUri={'../../assets/profilePic'}
                />
                {/* <Text style={{color: 'white'}}>
                    {this.props.username}
                </Text>
                <Text style={{color: 'white'}}>
                    {this.props.id}
                </Text> */}
            </View>
        )
    }
}
