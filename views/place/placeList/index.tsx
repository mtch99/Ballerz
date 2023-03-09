import React from "react";
import { IPlaceListViewProps } from "../../../screens/placeSearch/interface";
import { FlatList, KeyboardAvoidingView } from "react-native";
import PlaceItemView from "./placeItem";


export default class PlaceListView extends React.Component<IPlaceListViewProps>{
    

    render(): React.ReactNode {
        return(
            <KeyboardAvoidingView
                style={{flexGrow:1}}
            >
                <FlatList
                    data={this.props.placeList.items}
                    extraData={this.props.placeList}
                    renderItem={({item}) => {
                        return(
                            <PlaceItemView
                                placeData={item}
                                onPressPlaceItem={this.props.onPressPlaceItem}
                            />
                        )
                    }}
                />
            </KeyboardAvoidingView>
        )
    }
}