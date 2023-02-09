import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import FeedView from './views/feed';
import { FeedScreen } from './screens/feed';
import { store } from './app/store';
import FeedProvider from './controllers/feed/provider';


export default function App() {
  return (
    <Provider store = {store}>
      <FeedProvider
        navigation={{}}
      >
        <FeedScreen/>
      </FeedProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


function app2 (): React.ReactNode{


  return (
    <Provider store = {store}>
      <FeedProvider
        navigation={{}}
      >
        <FeedScreen/>
      </FeedProvider>
    </Provider>
  )
}

