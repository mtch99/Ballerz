
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import BallerzSafeAreaView from '../../views/safeArea';
import { ImageBackground } from 'react-native';
import { ProgressButton } from '../../components/Buttons/progressButton';

const image = require('../../assets/onboarding2.jpg') ;
// const image = require('../../assets/3ballerz.png') ;



export interface IDiscoverCityBallerzScreenProps{
    advance: () => void;
}
export class DiscoverCityBallerzScreen extends React.Component<IDiscoverCityBallerzScreenProps>{

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
                            Découvre les ballerz de la ville
                        </Text>

                        <Text
                            style={styles.body}
                        >
                            Rejoins le réseau local d'amoureux de basketball pour trouver des matchs et rencontrer des personnes qui partagent la même passion
                        </Text>

                        <ProgressButton
                          style={{justifyContent:'center', alignItems:'center'}}
                          percentage={75}
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
        // justifyContent: 'flex-end',
        // flexDirection: 'column-reverse',
        flexGrow: 1
    },

    bottomSheetContainer: {
        // flex:1,
        height: '25%',
        justifyContent:'space-evenly',
        borderColor: 'white',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        // borderWidth: 10,
        backgroundColor:'#0A0A0C',
    },

    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'white'
    },

    body: {
        fontSize: 19,
        textAlign: 'center',
        color: '#777777'
    }


})


// Ballerz a pour objectif de rassembler les amoureux de basketball sur les terrains. 
//                             Joins toi au réseau de Ballerz de ta ville découvrir les meilleurs 
/**
 * Grâce à l'application, tu sauras 
    en temps réel le nombre de joueurs présents sur les différents terrains de la ville
 */