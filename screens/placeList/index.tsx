

import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { IPlaceSearchScreenNavigationController } from "./interface";
import { AppContext, IAppContext } from "../../controllers/provider";
import PlaceListView from "../../views/place/placeList";
import { IPlaceListItemState } from "../../app/features/place/types";



export interface IPlaceListScreenPropsWithoutNavigation {
    
}


export interface IPlaceListScreenProps<T> extends IPlaceListScreenPropsWithoutNavigation{
    navigationController: T
}


export abstract class AbstractPlaceListScreen<T> extends React.Component<IPlaceListScreenProps<T>>{


    navigationController: T = this.props.navigationController
    constructor(props: IPlaceListScreenProps<T>) {
        super(props);
        console.error(JSON.stringify(props));
        this.onPressPlace = this.onPressPlace.bind(this);
    }

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext


    componentDidMount(): void {
        this.context.placeController.getAllPlaces()
        // console.error("component did mount")
    }


    abstract onPressPlace(placeData: IPlaceListItemState): void


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




export default class PlaceSearchScreen extends AbstractPlaceListScreen<IPlaceSearchScreenNavigationController>{
    navigationController: IPlaceSearchScreenNavigationController = this.props.navigationController
    onPressPlace(placeData: IPlaceListItemState){
        this.navigationController.goToPlaceProfile(placeData.id)
    }
}


