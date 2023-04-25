import React from "react"
import { View, Text } from "react-native"
import { IPlaceProfileState } from "../../app/features/place/types"
import { styles } from "./styles"
import { IPlaceProfileViewProps } from "../../screens/placeProfile"
import BallerzSafeAreaView from "../safeArea"
import { style } from "../feed/feed-item/styles"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { SectionList, SectionListProps } from "react-native"
import { IFeedItemState } from "../../app/features/feed/slice/interface"




export class PlaceProfileView extends React.Component<IPlaceProfileViewProps>{

    state: IPlaceProfileState = {
        games: [],
        id: "",
        name: "",
        address: ""
    }

    sectionListProps: SectionListProps<IFeedItemState> = {
        sections: [
            {
                data: this.props.games,
                key: "Parties"
            }
        ]
    }


    componentDidMount(): void {
        // console.warn(`Mounting props: ${JSON.stringify(this.props)}`)
    }

    componentDidUpdate(prevProps: Readonly<IPlaceProfileViewProps>, prevState: Readonly<{}>, snapshot?: any): void {
        // console.warn(`PlaceProfileView newProps: ${JSON.stringify(this.props)})`)
    }

    render(): React.ReactNode {
        return(
            <BallerzSafeAreaView>
                <>
                    <View style={style.container}>
                        <View
                            style={styles.profileDataContainer}
                        >
                            <View
                                style={{flexDirection: "row", ...styles.usernameContainer}}
                            >
                                <MaterialIcons
                                    name="place"
                                    size={17}
                                    color="grey"
                                />
                                <Text style={styles.usernameText}>
                                    {this.props.name}
                                </Text>
                            </View>
                            <Text style={{color: 'lightgrey'}}>
                                {this.props.address}
                            </Text>
                        </View>
                    </View>
                </>
            </BallerzSafeAreaView>
        )
    }
}
