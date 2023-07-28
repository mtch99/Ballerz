// import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, useColorScheme, StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './app/store';
import FeedProvider from './controllers/feed/provider';
import Navigation from './navigation';
import React from 'react';
import AppProvider, {MemoizedAppProvider} from './controllers/provider';
import { globalStyles } from './views/styles';
import * as Clipboard from "expo-clipboard";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import { handleImagePicked, pickImage, uploadImage } from './screens/utils/ImagePicker';

export default function App() {
  const colorScheme = useColorScheme()


  return (
    <>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor={globalStyles.global.screenBackgroundColor}
      />
        <Provider store={store}>
          <MemoizedAppProvider
          >
            <Navigation
              colorScheme={"dark"} 
            />
          </MemoizedAppProvider>
        </Provider>
    </>
  )
}