// import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, useColorScheme, StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './app/store';
import FeedProvider from './controllers/feed/provider';
import Navigation from './navigation';
import React from 'react';
import AppProvider from './controllers/provider';
import { globalStyles } from './views/styles';
import * as Clipboard from "expo-clipboard";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import { handleImagePicked, pickImage, uploadImage } from './screens/utils/ImagePicker';
export default function App() {
  const colorScheme = useColorScheme()

  // React.useEffect(() => {
  //   (async () => {
  //     if (Constants.platform?.ios) {
  //       const cameraRollStatus =
  //         await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
  //       if (
  //         cameraRollStatus.status !== "granted" ||
  //         cameraStatus.status !== "granted"
  //       ) {
  //         alert("Sorry, we need these permissions to make this work!");
  //         await ImagePicker.requestMediaLibraryPermissionsAsync();

  //       }else{
  //         pickImage(handleImagePicked)
  //       }
  //     }
  //   })();
  // }, []);
  return (
    <>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor={globalStyles.global.screenBackGroundColor}
      />
        <Provider store={store}>
          <AppProvider
          >
            <Navigation
              colorScheme={"dark"} 
            />
          </AppProvider>
        </Provider>
    </>
  )
}