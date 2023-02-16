// import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, useColorScheme, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './app/store';
import FeedProvider from './controllers/feed/provider';
import Navigation from './navigation';



export default function App() {
  const colorScheme = useColorScheme()
  return (
    <><StatusBar 
        barStyle={'light-content'}
      />
      <Provider store={store}>
        <FeedProvider
          navigation={{}}
        >
          <Navigation
            colorScheme={"dark"} 
          />
        </FeedProvider>
      </Provider>
    </>
  )
}