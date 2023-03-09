

import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { IPlaceData } from "../../app/features/feed/slice/interface";
import { IPlaceSearchScreenNavigationController } from "./interface";
import { AppContext, IAppContext } from "../../controllers/provider";
import PlaceListView from "../../views/place/placeList";



export interface IPlaceListScreenPropsWithoutNavigation {
    
}


export interface IPlaceListScreenProps extends IPlaceListScreenPropsWithoutNavigation{
    navigationController: IPlaceSearchScreenNavigationController
}


export default class PlaceListScreen extends React.Component<IPlaceListScreenProps>{

    constructor(props: IPlaceListScreenProps) {
        super(props);
    }

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext


    componentDidMount(): void {
        this.context.placeController.getAllPlaces()
        console.error("component did mount")
    }


    onPressPlace(id: string){
        throw new Error("Method not implemented")
    }


    render(): React.ReactNode {
        return(
            <SafeAreaView>
                    <PlaceListView
                        placeList={this.context.placeListState}
                        onPressPlaceItem={this.onPressPlace}
                    />
            </SafeAreaView>
        )
    }
}