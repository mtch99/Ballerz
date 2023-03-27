
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { globalStyles } from '../styles';


const FindYourFriendsBottomSheetView = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.headerText}>  Super! </Text>
                <Text style={styles.modalText}>Maintenant trouvez vos amis sur l'application et ajoutez les pour ètre au courant lorsqu'il vont jouer</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Ok</Text>
                </Pressable>
              </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
      marginBottom: 10
    },
    buttonClose: {
      backgroundColor: globalStyles.global.logoColor,
      width: 60,
      marginBottom: 10
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 15
    },
    
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 5
    }
  });
  

export default FindYourFriendsBottomSheetView;