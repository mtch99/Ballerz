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
                    <View
                        style={styles.usernameContainer}
                    >
                        <Text style={styles.usernameText}>{this.props.username}</Text>
                    </View>

                    <View
                        style={{flexDirection:'row', justifyContent:"center"}}
                    >
                        <View
                            style={{justifyContent:"center"}}
                        >
                            <Text
                                style={{
                                    fontSize: 17,
                                    color: "grey",
                                    fontWeight: "bold"
                                }}
                            >
                                4 amis
                            </Text>
                        </View>

                        <View
                            style={{flexDirection:"row", justifyContent:'flex-end', flexGrow:1, alignItems:'center'}}
                        >
                            <View
                                style={styles.addActionContainer}
                            >
                                {this.props.isFriend?(
                                    <ListItemButton
                                        onPress={() => {}}
                                        selected={true}
                                        title={"amis"}
                                    />
                                ):(
                                    <ListItemButton
                                        onPress={() => {}}
                                        selected={false}
                                        title="ajouter"
                                    />
                                )}
                            </View>
                        </View>
                    </View>
                    
                </View>
            </View>
        )

    }
}
