import React from "react";
import { IHeaderViewProps } from "../interface";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";



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
                    <TouchableOpacity
                        style={styles.addActionContainer}
                    >
                        <Text style={styles.addActionText}>ajouter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}