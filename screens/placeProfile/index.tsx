import React from "react";
import IPlaceProfileScreen, { IPlaceProfileScreenNavigationController } from "./interface";
import { View, Text } from "react-native";
import { AppContext, IAppContext } from "../../controllers/provider";
import { IPlaceProfileState } from "../../app/features/place/types";


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


    render(): React.ReactNode {
        return(
            <View>
                <Text style={{color: 'white'}}>
                    {this.state.name}
                </Text>
            </View>
        )
    }

} 