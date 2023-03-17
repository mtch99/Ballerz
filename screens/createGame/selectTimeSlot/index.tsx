import React from "react";
import { IPlaceData } from "../../../use-cases/types";
import { ISelectTimeSlotScreen } from "../interface";
import { ICreateGameInput, ICreateGameOutput } from "../../../use-cases/feed/interface";
import { AppContext, IAppContext } from "../../../controllers/provider";
import { SelectTimeSlotView } from "../../../views/selectTimeSlot";



export interface ISelectTimeSlotScreenPropsWithoutNavigation{
    chosenPlace: IPlaceData
    startingTime?: Date
    endingTime?: Date
}

export interface ISelectTimeSlotScreenProps extends ISelectTimeSlotScreenPropsWithoutNavigation{
    navigationController: ISelectTimeSlotScreenNavigationController
}

export interface ISelectTimeSlotScreenNavigationController extends IGameCreatedEventListener {
	goBack(): void
}
export interface IGameCreatedEventListener{
    onGameCreated(): void
}

export interface ISelectTimeSlotScreenState{
    chosenPlaceId: string
    chosenPlaceName: string
    startingTime: Date
    endingTime: Date
}

export interface ITime {
	hour: number
	minute: number
}


export default class SelectTimeSlotScreen extends React.Component<ISelectTimeSlotScreenProps, ISelectTimeSlotScreenState> implements ISelectTimeSlotScreen{
    

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    constructor(props: ISelectTimeSlotScreenProps){
        super(props)
		this.__bindMethods()
    }

	private __bindMethods(){
		this.createGame = this.createGame.bind(this)
		this.modifyEndingTime = this.modifyEndingTime.bind(this)
		this.modifyStartingTime = this.modifyStartingTime.bind(this)
		this.onPressModifyPlace = this.onPressModifyPlace.bind(this)
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
        console.warn(`Create Game input: ${JSON.stringify(input)}`)
        return this.context.feedController.createGame(input)
    }

	onPressModifyPlace(): void {
		this.props.navigationController.goBack()
	}

	modifyStartingTime(startingTime: Date): void {
        console.error("Modifying startingTime: " + startingTime.toUTCString())
		this.setState((prevState) => (
			{
				...prevState,
				startingTime
			}
		))
	}

	modifyEndingTime(endingTime: Date): void {
        console.error("Modifying endingTime: " + endingTime.toUTCString())
		this.setState((prevState) => (
			{
				...prevState,
				endingTime
			}
		))
	}

    render(): React.ReactNode {
        return(
            <SelectTimeSlotView
                startingTime={this.state.startingTime}
                endingTime={this.state.endingTime}
                placeName={this.state.chosenPlaceName}
                onPressPlay={this.createGame}
				onPressModifyPlace={this.onPressModifyPlace}
				modifyEndingTime={this.modifyEndingTime}
				modifyStartingTime={this.modifyStartingTime}
            />
        )
    }
}



export interface ISelectTimeSlotViewProps{
    onPressPlay(): void
    startingTime: Date
    endingTime: Date
    placeName: string
	onPressModifyPlace: () => void
	modifyEndingTime: SelectTimeSlotScreen['modifyEndingTime']
	modifyStartingTime: SelectTimeSlotScreen['modifyStartingTime']
}

