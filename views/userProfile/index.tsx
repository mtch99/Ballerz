import React from "react"
import { View, Text } from "react-native"
import { IUserProfileState } from "../../app/features/userProfile/types"
import { IUserProfileViewProps } from "../../screens/userProfile"
import { styles } from "./styles"





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

    render(): React.ReactNode {
        return(
            <View>
                {/* <View
                    style={styles.profilePictureContainer}
                /> */}
                <Text style={{color: 'white'}}>
                    {this.props.username}
                </Text>
                <Text style={{color: 'white'}}>
                    {this.props.id}
                </Text>
            </View>
        )
    }
}
