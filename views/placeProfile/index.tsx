import React from "react"
import { View, Text } from "react-native"
import { IPlaceProfileState } from "../../app/features/place/types"
import { styles } from "./styles"
import { IPlaceProfileViewProps } from "../../screens/placeProfile"




export class PlaceProfileView extends React.Component<IPlaceProfileViewProps>{

    state: IPlaceProfileState = {
        games: [],
        id: "",
        name: "",
        address: ""
    }


    componentDidMount(): void {
        // console.warn(`Mounting props: ${JSON.stringify(this.props)}`)
    }

    componentDidUpdate(prevProps: Readonly<IPlaceProfileViewProps>, prevState: Readonly<{}>, snapshot?: any): void {
        // console.warn(`PlaceProfileView newProps: ${JSON.stringify(this.props)})`)
    }

    render(): React.ReactNode {
        return(
            <View>
                <View
                    style={styles.profilePictureContainer}
                />
                <Text style={{color: 'white'}}>
                    {this.props.name}
                </Text>
                <Text style={{color: 'white'}}>
                    {this.props.address}
                </Text>
            </View>
        )
    }
}
