import React from "react";
import { IHeaderViewProps } from "../interface";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import ListItemButton from "../../../components/Buttons/ListItemButton";



export class HeaderView extends React.Component<IHeaderViewProps>{


    constructor(props: IHeaderViewProps){
        super(props);
    }

    render(){
        return(
            <View
                style={styles.container}
            >
                <View style={styles.profilePicContainer}>
                    <Image
                        style={styles.profilePic}
                        source={require("../../../assets/profilePic.jpg")}
                        // source={{uri: "../../../assets/profilePic.jpg"}}
                    />
                </View>

                <View
                    style={styles.profileDataContainer}
                >
                    <Text style={styles.usernameText}>{this.props.username}</Text>
                    <Text style={styles.cityText}>Quebec</Text>
                </View>
                <View
                    style={{flexDirection:"row", justifyContent:'flex-end', flexGrow:1, alignItems:'center'}}
                >
                    <View
                        style={styles.addActionContainer}
                    >
                        <ListItemButton
                            onPress={() => {}}
                            selected={this.props.isFriend || false}
                            title="ajouter"
                        />
                    </View>
                </View>
            </View>
        )

    }
}
