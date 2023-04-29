

import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { IPlaceSearchScreenNavigationController } from "./interface";
import { AppContext, IAppContext } from "../../controllers/provider";
import PlaceListView from "../../views/place/placeList";
import { IPlaceListItemState, IPlaceListState } from "../../app/features/place/types";
import { globalStyles } from "../../views/styles";
import BallerzSafeAreaView from "../../views/safeArea";
import { IScreenState, Screen } from "../interface";
import SearchBar from "../../views/makeFriends/SearchBar";
import placeController from "../../controllers/place";


export interface IPlaceListScreenPropsWithoutNavigation {
    
}

export interface IPlaceListScreenNavigationController {
    goToPlaceProfile(id: string): void;
}

export interface IPlaceListScreenProps<T> extends IPlaceListScreenPropsWithoutNavigation{
    navigationController: T
}

export interface IPlaceListScreenState extends IScreenState {
    placeList: IPlaceListState['items']
    filterInput: string
    filteredList: IPlaceListState['items']
}



export abstract class APlaceListScreen<P, S extends IPlaceListScreenState = IPlaceListScreenState> extends Screen<P, S>{

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    constructor(props: P) {
        super(props);
        this.onPressPlace = this.onPressPlace.bind(this)
        this.onFilterInputChange = this.onFilterInputChange.bind(this)
    }

    componentDidMount(): void {
        // this.makeRequest<undefined, void>(undefined, this.context.PlaceController.getAllPlaces.bind(this.context.PlaceController)).then(() => {this.__initState()})
        placeController.getAllPlaces().then(() => {this.__initState()})
    }

    
    onFilterInputChange(filterInput: string): void {
        let filteredList: IPlaceListState['items'] = this.state.placeList
        if(filterInput != '') {
            filteredList = this.__applyFilter(filterInput)
        }

        this.setState((prevState) => {
            const newState: S = {
                ...prevState,
                filteredList,
                filterInput,
            }
            return newState
        })
    }


    clearFilterInput(): void {
        const newState: S = {
            ...this.state,
            filteredPlaceList: this.state.placeList,
            filterInput: null
        }
    }

    __applyFilter(filterInput: string, placeList?: S['placeList']): S['placeList'] {
        
        if(filterInput == ''){
            return placeList || this.state.placeList
        }

        let listTofilter: S['placeList'] = placeList || this.state.placeList
        const result = listTofilter.filter(
            (place) => place.name.toLocaleLowerCase().includes(filterInput.toLocaleLowerCase())
        )

        return result
    }

    abstract onPressPlace(placeData: IPlaceListItemState): void

    /**
     * Called after the PlaceController retrieved all the Places
     */
    abstract __initState(): void 

}




export default class PlaceSearchScreen<P extends IPlaceListScreenNavigationController> extends APlaceListScreen<IPlaceListScreenProps<P>>{
    
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext
    
    navigationController: IPlaceListScreenNavigationController = this.props.navigationController


    __initState(): void {
        this.setState((prevState) => {
            const newPlaceList = this.context.placeListState.items
            const newState: IPlaceListScreenState = {
                ...prevState,
                placeList: newPlaceList,
                filteredList: newPlaceList,
            }
            return newState
        })
    }


    onPressPlace(placeData: IPlaceListItemState){
        this.navigationController.goToPlaceProfile(placeData.id)
    }

    render(): React.ReactNode {
        return(
            <BallerzSafeAreaView
            >   
                <>
                <SearchBar
                    onSearchInputChange={this.onFilterInputChange.bind(this)}
                />
                <PlaceListView
                    placeList={this.state.filteredList}
                    onPressPlaceItem={this.onPressPlace}
                />
                </>
            </BallerzSafeAreaView>
        )
    }
}


