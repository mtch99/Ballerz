import React from "react";
import IPlaceProfileScreen, { IPlaceProfileScreenNavigationController } from "./interface";
import { View, Text } from "react-native";
import { AppContext, IAppContext } from "../../controllers/provider";
import { IPlaceMapState, IPlaceProfileState } from "../../app/features/place/types";


export interface IPlaceProfileScreenPropsWithoutNavigation {
    placeId: string;
}


export interface IPlaceProfileScreenProps extends IPlaceProfileScreenPropsWithoutNavigation{
    navigationController: IPlaceProfileScreenNavigationController
}


export class PlaceProfileScreen extends React.Component<IPlaceProfileScreenProps, IPlaceProfileState> implements IPlaceProfileScreen {
    
    navigationController: IPlaceProfileScreenNavigationController;

    placeProfile: IPlaceProfileState = {
        games: [],
        id: "",
        name: "",
        address: ""
    }
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext


    state = {...this.placeProfile}

    constructor(props: IPlaceProfileScreenProps){
        super(props);
        this.navigationController = this.props.navigationController
    }
    
    addPicture(): void {
        throw new Error("Method not implemented.");
    }
    play(): void {
        throw new Error("Method not implemented.");
    }


    componentDidMount(): void {
        this.context.placeController.getPlaceProfile(this.props.placeId)
        this.setState((prevState) => ({
            ...prevState,
            ...this.context.placeMapState[this.props.placeId]
        }))
    }

    viewProps = {...this.state}


    render(): React.ReactNode {
        return(
            <PlaceProfileView
                {...this.state}
            />
        )
    }

} 

export interface IPlaceProfileViewProps extends IPlaceProfileState {
    
}


export class PlaceProfileView extends React.Component<IPlaceProfileViewProps>{


    componentDidUpdate(prevProps: Readonly<IPlaceProfileViewProps>, prevState: Readonly<{}>, snapshot?: any): void {
        console.warn(`PlaceProfileView newProps: ${JSON.stringify(this.props)})`)
    }
    render(): React.ReactNode {
        return(
            <View>
                <Text style={{color: 'white'}}>
                    {this.props.name}
                </Text>
            </View>
        )
    }
}