import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from "./styles";
import AwesomeAlert from 'react-native-awesome-alerts';
import DateTimePickerModal, {ReactNativeModalDateTimePickerProps} from "react-native-modal-datetime-picker";
import { ISelectTimeSlotViewProps, ITime } from "../../screens/createGame/selectTimeSlot";
import { StatusBar } from "expo-status-bar";
import EditPlaceView from "./EditPlace";
import { ISelectTimeSlotViewState, IDateTimePickerState, EditState, TimeEditActionType } from "./interface";
import EditTimeView, { EditDateView, EditEndingTimeView, EditStartingTimeView } from "./EditTime";
import { ConfirmButton } from "./CreateGameButton";





export class SelectTimeSlotView extends React.Component<ISelectTimeSlotViewProps, ISelectTimeSlotViewState>{


	state: ISelectTimeSlotViewState = {
		dateTimePickerState: {
			mode: "date",
			isVisible: false
		},
		editDateViewState: {
			date: this.props.startingTime
		},
		editStartingTimeViewState: {
			time: {
				hour: this.props.startingTime.getHours(),
				minute: this.props.startingTime.getMinutes()
			}
		},
		editEndingTimeViewState: {
			time: {
				hour: this.props.endingTime.getHours(),
				minute: this.props.endingTime.getMinutes()
			}
		},
		tempStartingTime: {
			hour: new Date().getHours(),
			minute: new Date().getMinutes()
		},
		tempEndingTime: {
			hour: new Date().getHours(),
			minute: new Date().getMinutes()
		},
		tempDate: this.props.startingTime,
		currentEditState: null
	}

	constructor(props: ISelectTimeSlotViewProps){
		super(props)
		this.__bindMethods()
	}

	private __bindMethods(){
		this.onCancelTimeEdit = this.onCancelTimeEdit.bind(this)
		this.onConfirmDateEdit = this.onConfirmDateEdit.bind(this)
		this.onConfirmEndingTimeEdit = this.onConfirmEndingTimeEdit.bind(this)
		this.onPressModifyEndingTimeButton = this.onPressModifyEndingTimeButton.bind(this)
		this.onEndingTimeEdit = this.onEndingTimeEdit?.bind(this)
		this.onDateEdit = this.onDateEdit?.bind(this)
		this.onStartingTimeEdit = this.onStartingTimeEdit?.bind(this)
		this.onPressDateTimePickerConfirm = this.onPressDateTimePickerConfirm.bind(this)
		this.onConfirmStartingTimeEdit = this.onConfirmStartingTimeEdit.bind(this)
		this.onPressModifyStartingTimeButton = this.onPressModifyStartingTimeButton.bind(this)
		this.onPressModifyDateButton = this.onPressModifyDateButton.bind(this)
	}


	onPressModifyDateButton(){
		const dateTimePickerState: IDateTimePickerState = {
			isVisible: true,
			mode: "date",
		}
		const currentEditState: EditState = 'DATE'
		this.setState((prevState) => (
			{
				...prevState,
				dateTimePickerState,
				currentEditState
			}
		))
	}

	onPressModifyStartingTimeButton(){
		const dateTimePickerState: IDateTimePickerState = {
			isVisible: true,
			mode: "time",
		}
		const currentEditState: EditState = 'STARTING_TIME'
		this.setState((prevState) => (
			{
				...prevState,
				dateTimePickerState,
				currentEditState
			}
		))
	}

	onPressModifyEndingTimeButton(){
		const dateTimePickerState: IDateTimePickerState = {
			isVisible: true,
			mode: "time",
		}
		const currentEditState: EditState = 'ENDING_TIME'
		this.setState((prevState) => (
			{
				...prevState,
				dateTimePickerState,
				currentEditState
			}
		))
	}


	private onTimeEdit(type: TimeEditActionType, newDate: Date): void {
		const tempTime: ITime = {
			hour: newDate.getHours(),
			minute: newDate.getMinutes()
		}

		switch(type){
			case 'STARTING_TIME': 
				this.setState((prevState) => (
					{
						...prevState,
						tempStartingTime: tempTime,
					}
				))
				break;
			
			case 'ENDING_TIME':
				this.setState((prevState) => (
					{
						...prevState,
						tempEndingTime: tempTime
					}
				))
				break;
			
			case 'DATE':
				this.setState((prevState) => (
					{
						...prevState,
						tempDate: newDate
					}
				))
			
		}
	}


	onStartingTimeEdit: ReactNativeModalDateTimePickerProps['onChange'] = (newDate: Date) => {
		this.onTimeEdit('STARTING_TIME', newDate)
	}

	onEndingTimeEdit: ReactNativeModalDateTimePickerProps['onChange'] = (newDate: Date) => {
		this.onTimeEdit('ENDING_TIME', newDate)
	}

	onDateEdit: ReactNativeModalDateTimePickerProps['onChange'] = (newDate: Date) => {
		this.onTimeEdit('DATE', newDate)
	}



	/**
	 * Update TimeViewState
	 * 
	 * @param type 
	 * @param date 
	 */
	private onConfirmTimeEdit(type: TimeEditActionType, date: Date): void{
		const timeEdit: ITime = {
			hour: date.getHours(),
			minute: date.getMinutes()
		}

		let newStartingTime: Date;
		let newEndingTime: Date;
		switch(type){
			case 'STARTING_TIME': 
				// Update EditTimeView
				this.setState((prevState) => (
					{
						...prevState,
						editStartingTimeViewState: {
							time: timeEdit
						},
					}
				))

				// Update SelectTimeSlotScreen StartingTime 
				newStartingTime = this.state.editDateViewState.date
				newStartingTime.setHours(date.getHours())
				newStartingTime.setMinutes(date.getMinutes())
				this.props.modifyStartingTime(newStartingTime)
				break;

			
			case 'ENDING_TIME':
				// Update EditEntingTimeView
				this.setState((prevState) => (
					{
						...prevState,
						editEndingTimeViewState: {
							time: timeEdit
						},
					}
				))


				// Update SelectTimeSlotScreen EndingTime 
				newEndingTime = this.state.editDateViewState.date
				newEndingTime.setHours(date.getHours())
				newEndingTime.setMinutes(date.getMinutes())
				this.props.modifyEndingTime(newEndingTime)
				break;
			
			case 'DATE':
				// Update EditDateView
				this.setState((prevState) => (
					{
						...prevState,
						editDateViewState: {
							date
						},
					}
				))


				// Update SelectTimeSlotScreen startingTime
				newStartingTime = date
				newStartingTime.setHours(this.state.editStartingTimeViewState.time.hour)
				newStartingTime.setMinutes(this.state.editStartingTimeViewState.time.minute)
				this.props.modifyStartingTime(newStartingTime)

				// Update SelectTimeSlotScreen EndingTime
				newEndingTime = date
				newEndingTime.setHours(this.state.editEndingTimeViewState.time.hour)
				newEndingTime.setMinutes(this.state.editEndingTimeViewState.time.minute)
				this.props.modifyEndingTime(newEndingTime)
				break;
		}

		this.hideDateTimePicker()
		this.endEditing()
	}

	

	onConfirmStartingTimeEdit: ReactNativeModalDateTimePickerProps['onConfirm'] = (date: Date) => {
		this.onConfirmTimeEdit('STARTING_TIME', date)
	}

	onConfirmEndingTimeEdit: ReactNativeModalDateTimePickerProps['onConfirm'] = (date: Date) => {
		this.onConfirmTimeEdit('ENDING_TIME', date)
	}

	onConfirmDateEdit: ReactNativeModalDateTimePickerProps['onConfirm'] = (date: Date) => {
		this.onConfirmTimeEdit('DATE', date)
	}

	onCancelTimeEdit: ReactNativeModalDateTimePickerProps['onCancel'] = (date: Date) => {
		this.hideDateTimePicker()
		this.endEditing()
	}

	


	/**
	 * set currenEditState to null before return
	 * @param date 
	 */
	onPressDateTimePickerConfirm: ReactNativeModalDateTimePickerProps['onConfirm'] = (date: Date) => {
		
		switch(this.state.currentEditState){
			case null: 
				console.warn("Current Edit state is null. Expected type TimeEditAction instead")
				break

			case 'DATE':
				this.onConfirmDateEdit(date)
				break;

			case 'ENDING_TIME':
				this.onConfirmEndingTimeEdit(date)
				break;

			case 'STARTING_TIME':
				this.onConfirmStartingTimeEdit(date)
				break;
		}
		return
	}
	
	dateTimePickerOnChangeHandler: ReactNativeModalDateTimePickerProps['onChange'] = (date: Date) => {
		switch(this.state.currentEditState){
			case null: 
				console.warn("Current Edit state is null. Expected type TimeEditAction instead")
				break

			case 'DATE':
				this.onDateEdit?this.onDateEdit(date):(null)
				break;

			case 'ENDING_TIME':
				this.onEndingTimeEdit?this.onEndingTimeEdit(date):(null)
				break;

			case 'STARTING_TIME':
				this.onStartingTimeEdit?this.onStartingTimeEdit(date):(null)
				break;
		}
	}

	onPressDateTimePickerCancel: ReactNativeModalDateTimePickerProps['onCancel'] = (date) => {
		this.endEditing()
		this.hideDateTimePicker()
	}

	
	private createDateTime(date: Date, time: ITime): Date {
		const dateTime: Date = new Date(date)
		dateTime.setHours(time.hour)
		dateTime.setMinutes(time.minute)
		return dateTime
	}

	private hideDateTimePicker(){
		const dateTimePickerState: IDateTimePickerState = {
			...this.state.dateTimePickerState,
			isVisible: false
		}
		this.setState((prevState) => (
			{
				...prevState,
				dateTimePickerState
			}
		))
	}

	private endEditing(){
		this.setState((prevState) => (
			{
				...prevState,
				currentEditState: null
			}
		))
	}


    render(): React.ReactNode {
        return(

            <SafeAreaView style={styles.container}>
                <DateTimePickerModal
					onConfirm={(date) => {this.onPressDateTimePickerConfirm(date)}}
					onCancel={(date) => {this.onPressDateTimePickerCancel(date)}}
					onChange={(date) => {
						this.dateTimePickerOnChangeHandler?
							this.dateTimePickerOnChangeHandler(date):(null)
					}}
					{...this.state.dateTimePickerState}
                />

                <EditPlaceView
					placeName={this.props.placeName}
					onPressModify={this.props.onPressModifyPlace}
                />

				<EditDateView
					onPressModify={this.onPressModifyDateButton}
					{...this.state.editDateViewState}
				/>

				<EditStartingTimeView
					onPressModify={this.onPressModifyStartingTimeButton}
					{...this.state.editStartingTimeViewState}
				/>

				<EditEndingTimeView
					onPressModify={this.onPressModifyEndingTimeButton}
					{...this.state.editEndingTimeViewState}
				/>

				<ConfirmButton
					onPress={() => {this.props.onPressPlay()}}
				/>

            <StatusBar style="auto" />
         </SafeAreaView>
        )
    }
}



