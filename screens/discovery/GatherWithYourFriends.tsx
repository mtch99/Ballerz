
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import BallerzSafeAreaView from '../../views/safeArea';
import { ImageBackground } from 'react-native';
import { ProgressButton } from '../../components/Buttons/progressButton';

const image = require('../../assets/3ballerz.png') ;



export interface IGatherWithYourFriendsScreenProps{
    advance: () => void;
}
export class GatherWithYourFriendsScreen extends React.Component<IGatherWithYourFriendsScreenProps>{

    advance(){
        this.props.advance();
    }


    render(): React.ReactNode {
        return (
            <SafeAreaView
                style={styles.container}
            >
                <ImageBackground
                    style={styles.container}
                    source={image}
                    resizeMode="stretch"
                >
                    <View
                        style={styles.bottomSheetContainer}
                    >
                        <Text
                            style={styles.header}
                        >
                            Réunissez-vous entre amis
                        </Text>

                        <Text
                            style={styles.body}
                        >
                            Profitez de l'été pour vous réunir, tisser des liens et et passer des moments inoubliables
                        </Text>

                        <ProgressButton
                          style={{justifyContent:'center', alignItems:'center'}}
                          percentage={100}
                          onPress={this.advance.bind(this)}
                        />

                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }

}



const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        // flexDirection: 'column-reverse',
        flexGrow: 1
    },

    bottomSheetContainer: {
        // flex:1,
        maxHeight: '45%',
        justifyContent:'space-evenly',
        borderColor: 'white',
        // borderBottomRightRadius: 50,
        // borderBottomLeftRadius: 50,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        // borderWidth: 10,
        backgroundColor:'#0A0A0C',
    },

    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'white',
        padding: 15,
    },

    body: {
        fontSize: 19,
        textAlign: 'center',
        color: '#777777',
        paddingBottom: 20,
        paddingHorizontal: 25,
    }


})


// Ballerz a pour objectif de rassembler les amoureux de basketball sur les terrains. 
// Joins toi au réseau de Ballerz de ta ville découvrir les meilleurs 
/**
 * Grâce à l'application, tu sauras 
    en temps réel le nombre de joueurs présents sur les différents terrains de la ville
 */