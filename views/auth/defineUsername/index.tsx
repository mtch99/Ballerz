import React from "react"
import { IDefineUsernameViewProps } from "../../../screens/user/createProfile/DefineUsername/interface"
import { View, Image, TextInput, Text, StyleSheet, Keyboard } from "react-native"
import { globalStyles } from "../../styles"
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler"
import BallerzSafeAreaView from "../../safeArea"
import { pickImage } from "../../../screens/utils/ImagePicker"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LoadingModalView } from "../../../components/Modals/loadingView"

export class DefineUsernameView extends React.Component<IDefineUsernameViewProps> {
    

    render(): React.ReactNode {
        return(
            <BallerzSafeAreaView>
                <>
                <LoadingModalView
                    isVisible={this.props.loading}
                />
                <TouchableWithoutFeedback
                    onPress={() => {
                        console.log("Pressed touchand without feedback")
                        Keyboard.dismiss()}
                    }
                >
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

                            <View
                            >
                                <Text
                                    style={styles.subTitle}
                                >
                                    Nom d'utilisateur
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

                        <>
                        <View
                            style={{
                                margin: 50,
                                alignItems: "center",
                            }}
                        >

                            <Text
                                style={styles.subTitle}
                            >
                                Ajoute une photo
                            </Text>

                            <View
                                style={{flexDirection:'row', marginTop:10}}
                            >
                                <Image
                                    style={{height: 70, width: 70, borderRadius: 70}}
                                    source={this.props.profilePicSource}
                                />

                                <View
                                    style={{justifyContent: 'flex-end'}}
                                >
                                    <TouchableOpacity
                                        onPress={() => {this.props.onPressProfilePic()}}
                                    >
                                        <MaterialIcons
                                            name="add-a-photo"
                                            size={30}
                                            color={"#969696"}
                                            style={{alignSelf: "flex-end"}}
                                        />
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                        </View>
                        

                        <View
                            style={{width: "66%"}}
                        >
                            <TouchableOpacity
                                style={styles.buttonLogin}
                                onPress={() => {this.props.onPressConfirm()}}

                            >
                                <Text style={styles.footerCreate}>Continuer</Text>
                            </TouchableOpacity>
                        </View>
                        </>

                        {this.props.error?
                            (<Text style={styles.errorText}>
                                {this.props.error}
                            </Text>):(<></>)
                        }
                    </View>
                </TouchableWithoutFeedback>
                </>
            </BallerzSafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
    },

    titleContainer: {
        margin: 10,
        marginBottom: 40,
        justifyContent: "center",
    },

    title: {
        fontSize: 34,
        fontWeight: "500",
        color: "white",
    },

    subTitle: {
        fontSize: 25,
        color: "#B1B1B1",
        fontWeight: "500",
    },

    confirmationCodeInputContainer: {
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
        marginTop: 10,
        color: globalStyles.global.logoColor,
        fontSize: 12
    },

    footerCreate: {
		color: 'white',
		fontWeight: '500',
		fontSize: 15,
	},

    buttonLogin: {
		marginTop: 20,
		alignItems: 'center',
		backgroundColor: '#e78b2f',
		borderRadius: 5,
		padding: 10,
	},
})