import React from "react";
import { TabView, SceneMap } from 'react-native-tab-view'
import UserProfileListScreen from "../userProfileList/userProfileList";
import PlaceSearchScreen, { AbstractPlaceListScreen } from "../placeList";
import UserProfileSearchScreen from "../userProfileList";
import { IPlaceSearchScreenNavigationController } from "../placeList/interface";
import { IUserProfileListScreenNavigationController } from "../userProfile/interface";


export interface IExploreTabScreenProps {
    placeSearcScreenNavigationController: IPlaceSearchScreenNavigationController
    userProfileSearchScreenNavigationController: IUserProfileListScreenNavigationController
}

export interface IExploreTabScreenState {
    index: number
}

export default class ExploreTabScreen extends React.Component<IExploreTabScreenProps, IExploreTabScreenState> {
    
    state = {
        index: 0
    }
    
    navigationState = {
        index:0, 
        routes: [
            {
                key: "first", title: "Terrains"
            }, 
            {
                key: "second", title: "Personnes"
            }
        ]
    }

    renderScene = SceneMap({
        first: () => (
            <PlaceSearchScreen
            navigationController={this.props.placeSearcScreenNavigationController}
            />
        ),
        second: () => (
            <UserProfileSearchScreen
                navigationController={this.props.userProfileSearchScreenNavigationController}
            />
        )
    })

    constructor(props: IExploreTabScreenProps){
        super(props)
        this.setIndex = this.setIndex.bind(this)
    }

    setIndex(index: number) {
        this.setState((prevState) => (
            {
                ...prevState,
                index
            }
        ))
    }
   
    render(): React.ReactNode {
        return(
            <TabView
                renderScene={this.renderScene}
                onIndexChange={this.setIndex}
                navigationState={this.navigationState}
            />
        )
    }
}