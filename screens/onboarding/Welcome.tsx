
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import BallerzSafeAreaView from '../../views/safeArea';
import { ImageBackground } from 'react-native';
import { ProgressButton } from '../../components/Buttons/progressButton';

const image = require('../../assets/onboarding1.jpg') ;
// const image = require('../../assets/3ballerz.png') ;



export interface IWelcomeScreenProps{
    advance: () => void;
}
export class WelcomeScreen extends React.Component<IWelcomeScreenProps>{

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
                            Qui va jouer ce soir?
                        </Text>

                        <Text
                            style={styles.body}
                        >
                            Grâce à l'application, tu sauras 
                            en temps réel le nombre de joueurs présents sur les différents terrains de la ville
                        </Text>

                        <ProgressButton
                          style={{justifyContent:'center', alignItems:'center', marginTop:10}}
                          percentage={25}
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
        maxHeight: '50%',
        padding: 20,
        justifyContent:'space-evenly',
        borderColor: 'white',
        // borderBottomRightRadius: 20,
        // borderBottomLeftRadius: 20,
        borderTopRightRadius: 55,
        borderTopLeftRadius: 55,
        // borderWidth: 10,
        backgroundColor:'#0A0A0C',
    },

    header: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'white'
    },

    body: {
        marginTop: 10,
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