import React from "react";
import { IPlaceData } from "../../../domain/use-cases/types";
import { ISelectTimeSlotScreen } from "../interface";
import { CreateGameErrorReason, ICreateGameError, ICreateGameInput, ICreateGameResult } from "../../../domain/use-cases/feed/interface";
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
	goToSelectPlace(): void
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
    error?: string
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
    }



    state: ISelectTimeSlotScreenState = {
        chosenPlaceId: this.props.chosenPlace.id,
        chosenPlaceName: this.props.chosenPlace.name,
        startingTime: this.props.startingTime?(this.props.startingTime):(new Date()),
        endingTime: this.props.endingTime?(this.props.endingTime):(new Date())
    }
    
    async createGame(): Promise<ICreateGameResult> {
        const userProfileID = this.context.authState.profile?.id
        if(!userProfileID){
            throw new Error("User not logged in")
        } else {
            let input: ICreateGameInput = {
                placeID:this.state.chosenPlaceId,
                userProfileID,
                startingTime: this.state.startingTime,
                endingTime: this.state.endingTime
            }
            const checkInput = checkGameInput(input)
            if(checkInput.error){
                this.handleCreateGameError(checkInput.error)
                return {error: checkInput.error}
            }
            else {
                const response = await this.context.feedController.createGame(checkInput.input)
                if(!response.error){
                    this.props.navigationController.onGameCreated()
                }
                else{
                    console.warn("SelectTimeSlotScreen: Error in use controller create game output")
                }
                return response
            }
        }
    }

    componentDidMount(): void {
        console.log(`Initial starting time: ${this.state.startingTime}`)
    }

    componentDidUpdate(prevProps: Readonly<ISelectTimeSlotScreenProps>, prevState: Readonly<ISelectTimeSlotScreenState>, snapshot?: any): void {
        console.error(`SelectTimeSlotScreen updated: ${this.state.startingTime}`)
    }

	onPressModifyPlace(): void {
		this.props.navigationController.goToSelectPlace()
	}

	modifyStartingTime(startingTime: Date): void {
		this.setState((prevState) => (
			{
				...prevState,
				startingTime
			}
		))
        console.error(`newState after modifying Starting time ${JSON.stringify(this.state)}`)
	}

	modifyEndingTime(endingTime: Date): void {

        const newState = {
            ...this.state,
            endingTime
        }
		this.setState((prevState) => (
            newState
        ))
        console.error(`newState after modifying Ending time ${JSON.stringify(this.state)}`)
    }

    handleCreateGameError(error: ICreateGameError): void {
        const newState: ISelectTimeSlotScreenState = {
            ...this.state,
            error: error.description
        }
        // this.setState(newState)
    }

    render(): React.ReactNode {
        return(
            <SelectTimeSlotView
                startingTime={this.state.startingTime}
                endingTime={this.state.endingTime}
                placeName={this.state.chosenPlaceName}
                onPressPlay={this.createGame.bind(this)}
				onPressModifyPlace={this.onPressModifyPlace.bind(this)}
				modifyEndingTime={this.modifyEndingTime.bind(this)}
				modifyStartingTime={this.modifyStartingTime.bind(this)}
                error={this.state.error}
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
    error?:string
}


function checkGameInput(input: ICreateGameInput): ICheckGameInputResult {
    const {startingTime, endingTime} = input
    let result: ICheckGameInputResult = {
        input
    }
    console.warn(JSON.stringify(input))
    if(startingTime.valueOf() >= endingTime.valueOf() ){
        if(endingTime.getHours() >= 6){
            result = {
                ...result,
                error: {
                    reason: CreateGameErrorReason.INVALID_ENDING_HOUR,
                    description: "Veuillez choisir une heure de fin inférieure à 5:00 am le lendemain"
                }
            }
        } else {
            const newEndingTime = new Date(endingTime.valueOf() + 24*60*60*1000)
            result = {
                input: {
                    ...result.input,
                    endingTime: newEndingTime
                }
            }
        }
    }
    return result
}


export type ICheckGameInputResult = {
    input: ICreateGameInput
    error?: ICreateGameError
}



