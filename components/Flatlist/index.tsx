import React from "react";
import { FlatListProps, NativeSyntheticEvent, NativeScrollEvent,FlatList, Dimensions, View } from "react-native";
import { globalStyles } from "../../views/styles";

const { height: viewportHeight } = Dimensions.get('window');

export interface IProps<ItemType> extends FlatListProps<ItemType> {

}
export class BallerzFlatList<ItemType> extends React.Component<IProps<ItemType>>{

    state = {
        bounces: false
    }

    _onScroll (event: NativeSyntheticEvent<NativeScrollEvent>) {
        const scrollPosition = event && event.nativeEvent && event.nativeEvent.contentOffset && event.nativeEvent.contentOffset.y;
        let newBouncesValue;

        if (scrollPosition < viewportHeight / 15) {
            newBouncesValue = false;
        } else {
            newBouncesValue = true;
        }

        if (newBouncesValue === this.state.bounces) {
            return;
        }

        this.setState({ bounces: newBouncesValue });
    }



    render(): React.ReactNode {
        return(
                <FlatList
                    data={this.props.data}
                    extraData={this.props.extraData}
                    style={{flexGrow:1, backgroundColor: globalStyles.global.screenBackgroundColor}}
                    renderItem={this.props.renderItem}
                    bounces={true}
                    onScroll={this._onScroll.bind(this)}
                    scrollEnabled={true}
                    scrollEventThrottle={16}
                />
        )
    }
}