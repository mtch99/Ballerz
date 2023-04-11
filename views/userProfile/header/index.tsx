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
        let AddButton = () => (
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
                        this.props.friendshipRequestSent?(
                            <ListItemButton
                            onPress={() => {}}
                            selected={true}
                            title={"ajouter"}
                            />
                        ):(
                            <ListItemButton
                                onPress={this.props.onPressAddButton.bind(this)}
                                selected={false}
                                title="ajouter"
                            />
                        )
                    )}
                </View>
            </View>
        )
        
        if(this.props.myProfile){
            AddButton = () => <></>
        }
        return(
            <View
                style={styles.container}
            >
                <View style={styles.profilePicContainer}>
                    <Image
                        style={styles.profilePic}
                        source={require("../../../assets/profilePic.jpg")}
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
                        style={{flexDirection:'row', justifyContent:"flex-start"}}
                    >
                        <TouchableOpacity
                            style={{justifyContent:"center"}}
                            onPress={this.props.onPressFriendsNumber}
                        >
                            <Text
                                style={{
                                    fontSize: 17,
                                    color: "grey",
                                    fontWeight: "bold"
                                }}
                            >
                                {this.props.friendsList.length} amis
                            </Text>
                        </TouchableOpacity> 
                        <AddButton/>
                    </View>
                </View>
            </View>
        )

    }
}
