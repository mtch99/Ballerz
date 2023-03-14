import React from "react";
import { IPlaceData } from "../../../use-cases/types";
import { ISelectTimeSlotScreen } from "../interface";
import { ICreateGameInput, ICreateGameOutput } from "../../../use-cases/feed/interface";
import { AppContext, IAppContext } from "../../../controllers/provider";
import { View, Text, TouchableOpacity } from "react-native";


export interface ISelectTimeSlotScreenPropsWithoutNavigation{
    chosenPlace: IPlaceData
    startingTime?: Date
    endingTime?: Date
}

export interface ISelectTimeSlotScreenProps extends ISelectTimeSlotScreenPropsWithoutNavigation{
    navigationController: ISelectTimeSlotScreenNavigationController
}

export interface ISelectTimeSlotScreenNavigationController extends IGameCreatedEventListener {}
export interface IGameCreatedEventListener{
    onGameCreated(): void
}

export interface ISelectTimeSlotScreenState{
    chosenPlaceId: string
    chosenPlaceName: string
    startingTime: Date
    endingTime: Date
}


export default class SelectTimeSlotScreen extends React.Component<ISelectTimeSlotScreenProps, ISelectTimeSlotScreenState> implements ISelectTimeSlotScreen{
    

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    constructor(props: ISelectTimeSlotScreenProps){
        super(props)
        this.createGame = this.createGame.bind(this)
    }

    state: ISelectTimeSlotScreenState = {
        chosenPlaceId: this.props.chosenPlace.id,
        chosenPlaceName: this.props.chosenPlace.name,
        startingTime: this.props.startingTime?(this.props.startingTime):(new Date()),
        endingTime: this.props.endingTime?(this.props.endingTime):(new Date())
    }
    
    async createGame(): Promise<ICreateGameOutput> {
        const input: ICreateGameInput = {
            placeId:this.state.chosenPlaceId,
            userProfileId: "moiId",
            startingTime: this.state.startingTime,
            endingTime: this.state.endingTime
        }
        return this.context.feedController.createGame(input)
    }


    render(): React.ReactNode {
        return(
            <SelectTimeSlotView
                startingTime={this.state.startingTime}
                endingTime={this.state.endingTime}
                placeName={this.state.chosenPlaceName}
                onPressPlay={this.createGame}
            />
        )
    }
}



export interface ISelectTimeSlotViewProps{
    onPressPlay(): void
    startingTime: Date
    endingTime: Date
    placeName: string
}


export class SelectTimeSlotView extends React.Component<ISelectTimeSlotViewProps>{



    render(): React.ReactNode {
        return(
            <View>
                <Text style={{color: 'white'}}>{this.props.placeName}</Text>
                <Text style={{color: 'white'}}>{this.props.startingTime.toLocaleString()}</Text>
                <Text style={{color: 'white'}}>{this.props.endingTime.toLocaleString()}</Text>
                <TouchableOpacity
                    onPress={() => {this.props.onPressPlay()}}
                >
                    <Text style={{color: 'white', alignSelf: 'center'}}>Jouer</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

