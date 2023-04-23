import React from "react";
import { TabView, SceneMap, TabBar, SceneRendererProps, TabBarProps } from 'react-native-tab-view'
import PlaceSearchScreen, { AbstractPlaceListScreen } from "../placeList";
import { IPlaceSearchScreenNavigationController } from "../placeList/interface";
import UserProfileSearchScreen from "../userProfileList/userProfileSearch";
import { globalStyles } from "../../views/styles";
import { IUserProfileListScreenNavigationController } from "../userProfileList/interface";


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

    renderTabBar(props: TabBarProps<any>){
        return(
            <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: globalStyles.global.logoColor }}
                style={{ backgroundColor: globalStyles.global.screenBackGroundColor}}
                activeColor={globalStyles.global.logoColor}
            />
        )
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
                renderTabBar={this.renderTabBar}
            />
        )
    }
}