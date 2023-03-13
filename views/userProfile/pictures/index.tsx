import React from "react";
import { FlatList, Image, View, Text } from "react-native";
import styles from "./styles";
import { IPicturesViewProps } from "../interface";


export default class PictresView extends React.Component<IPicturesViewProps> {

    render(): React.ReactNode {
        return(
            <View style={styles.container}>
                <Text style={styles.mediaText}>Medias</Text>
                <FlatList
                    data={this.props.pictureUriList}
                    style={styles.mediaListContainer}
                    renderItem={({item}) => {
                        let localImage;
                        switch (item){
                            case '../../assets/profilePic':
                                localImage = require('../../../assets/profilePic.jpg')
                                break
                            case '../../assets/dunkPic':
                                localImage = require('../../../assets/dunkPic.png')
                                break
                        }
                        return (
                            <Image
                                style={styles.pictureItem}
                                // source={require("../../../assets/profilePic.jpg")}
                                source={localImage}
                            />
                        )
                    }}
                    horizontal={true}
                />
                {/* <Image
                    style={styles.pictureItem}
                    source={require("../../../assets/profilePic.jpg")}
                    // source={{uri: "../../../assets/profilePic.jpg"}}
                />
                <Image
                    style={styles.pictureItem}
                    source={require("../../../assets/dunkPic.png")}
                    // source={{uri: "../../../assets/profilePic.jpg"}}
                /> */}
            </View>
        )
    }
}