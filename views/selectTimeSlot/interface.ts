import { ITime } from "../../screens/game/createGame/selectTimeSlot"



export enum TimeEditActionEnum {
	"DATE",
	"STARTING_TIME",
	"ENDING_TIME"
}


export type TimeEditActionType = keyof typeof TimeEditActionEnum
export type EditState = TimeEditActionType | null


export interface ISelectTimeSlotViewState {
	dateTimePickerState: IDateTimePickerState
	editDateViewState: IEditDateViewState
	editStartingTimeViewState: IEditTimeViewState
	editEndingTimeViewState: IEditTimeViewState
	tempDate: Date
	tempStartingTime: ITime
	tempEndingTime: ITime
	currentEditState: EditState
}


export interface IDateTimePickerState {
	mode: "date"|"time"|"datetime"
	isVisible: boolean
}

export interface IEditTimeViewProps extends IEditTimeViewState{
	onPressModify(): void
}

export interface IEditTimeViewState {
	time: ITime
}


export interface IEditDateViewProps extends IEditDateViewState{
    onPressModify(): void
}
export interface IEditDateViewState{
	date: Date
}

export interface IEditPlaceViewProps{
    onPressModify: () =>void
    placeName: string
}

export interface IConfirmButtonProps{
	onPress: () => void
}

