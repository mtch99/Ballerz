// import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, useColorScheme, StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './app/store';
import FeedProvider from './controllers/feed/provider';
import Navigation from './navigation';
import React from 'react';
import AppProvider from './controllers/provider';



export default function App() {
  const colorScheme = useColorScheme()
  return (
    <>
      <StatusBar 
        barStyle={'light-content'}
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