import {Dimensions, NativeScrollEvent, NativeSyntheticEvent} from 'react-native'

const { height: viewportHeight } = Dimensions.get('window');
export function __flatlist_onScroll (event: NativeSyntheticEvent<NativeScrollEvent>) {
    
    const scrollPosition = event && event.nativeEvent && event.nativeEvent.contentOffset && event.nativeEvent.contentOffset.y;
    let newBouncesValue;

    if (scrollPosition < viewportHeight / 3) {
        newBouncesValue = false;
    } else {
        newBouncesValue = true;
    }

    // if (newBouncesValue === this.state.bounces) {
    //     return;
    // }

    // this.setState({ bounces: newBouncesValue });
}

