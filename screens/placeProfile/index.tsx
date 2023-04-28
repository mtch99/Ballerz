import React from "react";
import IPlaceProfileScreen, { IPlaceProfileScreenNavigationController } from "./interface";
import { View, Text } from "react-native";
import { AppContext, IAppContext } from "../../controllers/provider";
import { IPlaceMapState, IPlaceProfileState } from "../../app/features/place/types";
import { PlaceProfileView } from "../../views/placeProfile";
// import { PlaceProfileView } from "../../views/placeProfile";


export interface IPlaceProfileScreenPropsWithoutNavigation {
    placeId: string;
}


export interface IPlaceProfileScreenProps extends IPlaceProfileScreenPropsWithoutNavigation{
    navigationController: IPlaceProfileScreenNavigationController
}

export interface IPlaceProfileScreenState extends IPlaceProfileState {

}


export class PlaceProfileScreen extends React.Component<IPlaceProfileScreenProps, IPlaceProfileScreenState> implements IPlaceProfileScreen {
    
    navigationController: IPlaceProfileScreenNavigationController;

    placeProfile: IPlaceProfileState = {
        games: [],
        id: "",
        name: "",
        address: ""
    }
    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext


    state = {
        ...this.placeProfile
    }

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
        this.setState((prevState) => {
            const placeProfile = this.context.placeMapState[this.props.placeId]
            return {
                ...prevState,
                ...placeProfile
            }
        })
        this.context.placeController.getPlaceProfile(this.props.placeId)
    }

    viewProps = {...this.state}


    render(): React.ReactNode {
        if(this.context.placeMapState[this.props.placeId]){
            return( 
                <PlaceProfileView
                    {...this.context.placeMapState[this.props.placeId]}
                />
            )
        }else{
            return(
                <PlaceProfileView
                    {...this.state}
                /> 
            )
        }
    }

} 

export interface IPlaceProfileViewProps extends IPlaceProfileState{

}


// export class PlaceProfileView extends React.Component<IPlaceProfileViewProps>{


//     componentDidMount(): void {
//         console.warn(`Mounting props: ${JSON.stringify(this.props)}`)
//     }

//     componentDidUpdate(prevProps: Readonly<IPlaceProfileViewProps>, prevState: Readonly<{}>, snapshot?: any): void {
//         console.warn(`PlaceProfileView newProps: ${JSON.stringify(this.props)})`)
//     }

//     render(): React.ReactNode {

//         // if(this.props.placeMap[this.props.placeId]){
//         //     return <></>
//         // }
//         return(
//             <View>
//                 <Text style={{color: 'white'}}>
//                     {this.props.name}
//                 </Text>
//             </View>
//         )
//     }
// }