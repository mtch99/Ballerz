import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import FeedView from './views/feed';
import { FeedScreen } from './screens/feed';
import FeedModelProvider from './app/features/feed/adapter';
import { store } from './app/store';
import FeedProvider from './screens/feed/provider';


export default function App() {
  return (
    app2()
  );
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

