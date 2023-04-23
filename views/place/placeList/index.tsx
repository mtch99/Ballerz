import React from "react";
import { IPlaceListViewProps } from "../../../screens/placeList/interface";
import { FlatList, KeyboardAvoidingView } from "react-native";
import PlaceItemView from "./placeItem";
import { globalStyles } from "../../styles";


export default class PlaceListView extends React.Component<IPlaceListViewProps>{
    

    render(): React.ReactNode {
        return(
            <KeyboardAvoidingView
                style={{backgroundColor: globalStyles.global.screenBackGroundColor}}
            >
                <FlatList
                    style={{backgroundColor: globalStyles.global.screenBackGroundColor}}
                    data={this.props.placeList}
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