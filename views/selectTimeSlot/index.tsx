import React from "react";
import { Text, Appearance, View} from "react-native";
import styles from "./styles";
import DateTimePickerModal, {ReactNativeModalDateTimePickerProps} from "react-native-modal-datetime-picker";
import { ISelectTimeSlotViewProps, ITime } from "../../screens/createGame/selectTimeSlot";
import EditPlaceView from "./EditPlace";
import { ISelectTimeSlotViewState, IDateTimePickerState, EditState, TimeEditActionType } from "./interface";
import { EditDateView, EditEndingTimeView, EditStartingTimeView } from "./EditTime";
import { ConfirmButton } from "./CreateGameButton";
import BallerzSafeAreaView from "../safeArea";
import Modal, {ModalProps} from 'react-native-modal';
import { ActivityIndicator } from "react-native";
import { globalStyles } from "../styles";



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

	componentDidUpdate(prevProps: Readonly<ISelectTimeSlotViewProps>, prevState: Readonly<ISelectTimeSlotViewState>, snapshot?: any): void {
		// console.log(`\n \n SelectTimeSlotView.componentDidUpdate: \n prevProps: ${JSON.stringify(prevProps)}\n new: ${JSON.stringify(this.props)} \n \n`)
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

		const typee = this.state.currentEditState 
		switch(typee){
			case 'STARTING_TIME': 
				console.log(`Editing starting time`)
				this.setState((prevState) => (
					{
						...prevState,
						tempStartingTime: tempTime,
					}
				))
				break;
			
			case 'ENDING_TIME':
				console.log(`Editing ending time`)
				this.setState((prevState) => (
					{
						...prevState,
						tempEndingTime: tempTime
					}
				))
				break;
			
			case 'DATE':
				console.log(`Editing date`)
				this.setState((prevState) => (
					{
						...prevState,
						tempDate: newDate
					}
				))
				break;
			
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
	 * @param inputDate 
	 */
	private onConfirmTimeEdit(type: TimeEditActionType, inputDate: Date): void{
		let newStartingTime: Date;
		let newEndingTime: Date;
		switch(type){
			case 'STARTING_TIME': 
				// Update SelectTimeSlotScreen StartingTime 
				this.updateTime(inputDate, "STARTING")
				break;	
				
			case 'ENDING_TIME':
				// Update SelectTimeSlotScreen EndingTime 
				this.updateTime(inputDate, "ENDING")
				break;
			
			case 'DATE':
				// Update EditDateView
				this.setState((prevState) => (
					{
						...prevState,
						editDateViewState: {
							date: inputDate
						},
					}
				))

				// Update SelectTimeSlotScreen startingTime
				newStartingTime = new Date(inputDate)
				newStartingTime.setHours(this.props.startingTime.getHours())
				newStartingTime.setMinutes(this.props.startingTime.getMinutes())

				// Update SelectTimeSlotScreen EndingTime
				newEndingTime = new Date(inputDate)
				newEndingTime.setHours(this.props.endingTime.getHours())
				newEndingTime.setMinutes(this.props.endingTime.getMinutes())

				this.props.modifyStartingAndEndingTimes(newStartingTime, newEndingTime)
				break;

			default:
				break;
		}

		this.hideDateTimePicker()
		this.endEditing()
	}

	private updateTime(inputDate: Date, type:"STARTING"|"ENDING"): void{
		const currentDate = this.state.editDateViewState.date
		switch(type){
			case "STARTING":
				const newStartingTime = new Date(currentDate)
				newStartingTime.setHours(inputDate.getHours())
				newStartingTime.setMinutes(inputDate.getMinutes())
				this.props.modifyStartingTime(newStartingTime)
				break;

			case "ENDING":
				const newEndingTime = new Date(currentDate)
                newEndingTime.setHours(inputDate.getHours())
                newEndingTime.setMinutes(inputDate.getMinutes())
                this.props.modifyEndingTime(newEndingTime)
				break;

            default:
				break;
		}
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

            <BallerzSafeAreaView>
				<>
				<LoadingModalScreen
                    isVisible={this.props.loading}
				/>
					
                <BallerzDateTimePickerModal
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
					time={{hour: this.props.startingTime.getHours(), minute: this.props.startingTime.getMinutes()}}
				/>

				<EditEndingTimeView
					onPressModify={this.onPressModifyEndingTimeButton}
					time={{hour: this.props.endingTime.getHours(), minute: this.props.endingTime.getMinutes()}}
				/>

				<ConfirmButton
					onPress={() => {this.props.onPressPlay()}}
				/>
				{this.props.error?(
					<Text
                        style={styles.errorText}
					>
						{this.props.error}
					</Text>
				): (<></>)}
				</>
         	</BallerzSafeAreaView>
        )
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
}


export function BallerzDateTimePickerModal(props: ReactNativeModalDateTimePickerProps){
	let colorScheme = Appearance.getColorScheme();
	let display: ReactNativeModalDateTimePickerProps['display'] = "spinner"
	if(props.mode == "date"){
		display = "inline"
	}

	return(
		<DateTimePickerModal
			{...props}
			isDarkModeEnabled={(colorScheme=="dark")?true:false}
			locale="fr_CA"
			display={display}
        />
	)
}

export interface ILoadingModalProps {
	isVisible: boolean;
}
export function LoadingModalScreen(props: ILoadingModalProps){
	console.log(`LoadingScreen props: ${JSON.stringify(props)}`)
	return(
		<Modal 
			isVisible={props.isVisible} 
			style={{ 
				backgroundColor: 'rgba(0, 0, 0, 0.5)', 
				margin: 0, 
				justifyContent: 'center' 
			}}
		>
			<ActivityIndicator
                size="large"
                color={globalStyles.global.logoColor}
			/>
			{/* Your modal content here */}
		</Modal>
	)
}

export interface ILoadingModalProps {
	isVisible: boolean;
}
export function CreatedGameModal(props: ILoadingModalProps){
	console.log(`LoadingScreen props: ${JSON.stringify(props)}`)
	return(
		<Modal 
			isVisible={props.isVisible} 
			style={{ 
				backgroundColor: 'rgba(0, 0, 0, 0.5)', 
				margin: 0, 
				justifyContent: 'center' 
			}}
		>
            <View
                style={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}
            >
                <View
                    style={{
                        padding: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: "bold",
                            color: "black",
                        }}
                    >
                        Ball is life 🔥🔥🔥
                    </Text>

                </View>

            </View>
			{/* Your modal content here */}
		</Modal>
	)
}