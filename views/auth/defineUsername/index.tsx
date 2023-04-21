import React from "react"
import { IDefineUsernameViewProps } from "../../../screens/createProfile/DefineUsername/interface"
import { View, Image, TextInput, Text, StyleSheet } from "react-native"
import { globalStyles } from "../../styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import BallerzSafeAreaView from "../../safeArea"
import { pickImage } from "../../../screens/utils/ImagePicker"

export class DefineUsernameView extends React.Component<IDefineUsernameViewProps> {
    

    render(): React.ReactNode {
        return(
            <BallerzSafeAreaView>
                <View
                    style={styles.container}
                >
                    <View
                        style={styles.titleContainer}
                    >
                        <Text
                            style={styles.title}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                        >
                            Crée ton profile
                        </Text>
                    </View>

                    <View>
                        <Text
                            style={styles.subTitle}
                        >
                            Définis ton nom
                        </Text>
                    </View>
                    <TextInput
                        placeholder="Giannis Antetokumpo"
                        placeholderTextColor={"#969696"}
                        style={styles.confirmationCodeInputContainer}
                        onChangeText={(input) => {this.props.onUsernameInputChange(input)}}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoComplete="off"
                    />

                    <View
                        style={{
                            margin: 20,
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={styles.subTitle}
                        >
                            Ajoute une photo
                        </Text>
                        <TouchableOpacity
                            onPress={() => {this.props.onPressProfilePic()}}
                        >
                            <Image
                                style={{height: 70, width: 70, borderRadius: 70}}
                                source={this.props.profilePicSource}
                            />
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity
                        onPress={() => {this.props.onPressConfirm()}}
                    >
                        <Text style={styles.footerCreate}>Continuer</Text>
                    </TouchableOpacity>
                    {this.props.error?(<Text>{this.props.error}</Text>):(<></>)}
                </View>
            </BallerzSafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: globalStyles.global.screenBackGroundColor
    },

    titleContainer: {
        // marginHorizontal: 10,
        margin: 10,
        marginBottom: 40,
        // width: "90%",
        // flexWrap: "wrap",
        // alignItems: "center",
        alignSelf: 'flex-start',
        justifyContent: "center",
        // flex: 1,
    },

    title: {
        // flex: 1,
        fontSize: 34,
        fontWeight: "500",
        color: "white",
        // flexWrap: "wrap",
    },

    subTitle: {
        fontSize: 25,
        // color: "white",
        color: "#B1B1B1",
        fontWeight: "500",
    },

    confirmationCodeInputContainer: {
        // flex: 1,
        marginTop: 15,
        height: 52,
        borderRadius: 56,
        backgroundColor: globalStyles.global.itemBackgroundColor,
        padding: 10,
        width: "90%",
        color: "white",
    },

    confirmButton: {
        backgroundColor: globalStyles.global.logoColor,
        width: "60%"
    },

    confirmButtonText: {
        color: "white"
    },

    errorText: {
        marginTop: 5,
        color: 'red',
        fontSize: 12
    },

    footerCreate: {
        marginTop: 10,
		color: '#e78b2f',
		fontWeight: 'bold',
		fontSize: 15
	 },
})