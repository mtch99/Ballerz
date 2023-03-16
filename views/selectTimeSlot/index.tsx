import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from "./styles";
import AwesomeAlert from 'react-native-awesome-alerts';
import DateTimePickerModal, {ReactNativeModalDateTimePickerProps} from "react-native-modal-datetime-picker";
import { ISelectTimeSlotViewProps, ITime } from "../../screens/createGame/selectTimeSlot";
import { StatusBar } from "expo-status-bar";
import EditPlaceView from "./EditPlace";
import { ISelectTimeSlotViewState, IDateTimePickerState, EditState, TimeEditActionType } from "./interface";





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


	onPressModifyDateButton(){
		const dateTimePickerState: IDateTimePickerState = {
			isVisible: true,
			mode: "time",
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
		const time: ITime = {
			hour: date.getHours(),
			minute: date.getMinutes()
		}
		switch(type){
			case 'STARTING_TIME': 
				this.setState((prevState) => (
					{
						...prevState,
						editStartingTimeViewState: {
							time
						},
					}
				))
				break;
			
			case 'ENDING_TIME':
				this.setState((prevState) => (
					{
						...prevState,
						editEndingTimeViewState: {
							time
						},
					}
				))
				break;
			
			case 'DATE':
				this.setState((prevState) => (
					{
						...prevState,
						editDateViewState: {
							date
						},
					}
				))
				break;
		}

		this.hideDateTimePicker()
		this.endEditing()
	}

	

	onConfirmStartingTimeEdit: ReactNativeModalDateTimePickerProps['onConfirm'] = (date: Date) => {
		this.onConfirmTimeEdit('STARTING_TIME', date)
		const startingDateTime = this.createDateTime(this.state.editDateViewState.date, this.state.editStartingTimeViewState.time)
		this.props.modifyStartingTime(startingDateTime)
	}

	onConfirmEndingTimeEdit: ReactNativeModalDateTimePickerProps['onConfirm'] = (date: Date) => {
		this.onConfirmTimeEdit('ENDING_TIME', date)
		const endingDateTime = this.createDateTime(this.state.editDateViewState.date, this.state.editEndingTimeViewState.time)

		// Update the parent screen
		this.props.modifyEndingTime(endingDateTime)
	}

	onConfirmDateEdit: ReactNativeModalDateTimePickerProps['onConfirm'] = (date: Date) => {
		this.onConfirmTimeEdit('DATE', date)
		const endingDateTime = this.createDateTime(this.state.editDateViewState.date, this.state.editEndingTimeViewState.time)
		const startingTime = this.createDateTime(this.state.editDateViewState.date, this.state.editStartingTimeViewState.time)
		
		// Update the parent screen
		this.props.modifyEndingTime(endingDateTime)
		this.props.modifyStartingTime(startingTime)
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
				console.warn("Current Edidt state is null. Expected type TimeEditAction instead")
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
                  	{...this.state.dateTimePickerState}
					onConfirm={() => {}}
					onCancel={() => {}}
					onChange={(date) => {}}
                />

                <EditPlaceView
					placeName={this.props.placeName}
					onPressModify={this.props.onPressModifyPlace}
                />

                {/* <View style={styles.subContainer}>
        <Text style={styles.subTitle}>
          Jour
        </Text>

        <View style={styles.dateContainer}>
            <FullDate
              style={styles.modifyText}
              weekDay={myDate.weekDay}
              monthDay={myDate.monthDay}
              month={myDate.month}
              year={myDate.year}
            />
            <TouchableOpacity 
              style={styles.modifyButton}
              onPress={handleModifyDateButtonPress}
            >
              <Text style={styles.modifyText}>
                modifier
              </Text>
            </TouchableOpacity>
        </View>
                </View>

                <View style={styles.subContainer}>
        <Text style={styles.subTitle}>
          Heure de début
        </Text>

        <View style={styles.dateContainer}>

            <Time
              hour = {myArrivingTime.hour}
              minute = {myArrivingTime.minute}
            />
            
            <ModifyButton
              onPress = {handleModifyArrivingTimeButtonPress}
            />
        </View>
                </View>

                <View style={styles.subContainer}>
        <Text style={styles.subTitle}>
          Heure de fin 
        </Text>

        <View style={styles.dateContainer}>
            <Time
              hour = {myDepartureTime.hour}
              minute = {myDepartureTime.minute}
            />
            <ModifyButton
              onPress = {handleModifyDepartureTimeButtonPress}
            />
        </View>
                </View>

                <View style={styles.confirmButtonContainer}>
        <ConfirmButton
          onPress = {handleConfirmButtonPress}
        />
                </View>

                <AwesomeAlert
                    show={showAlert}
            showProgress={false}
            title={`Présence Confirmée`}
            message={alertMessage}
            // closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            // showCancelButton={true}
            showCancelButton={false}
            showConfirmButton={true}
            cancelText="No, cancel"
            confirmText="OK"
            confirmButtonColor="blue"
            onCancelPressed={handleAlertConfirmButtonPress}
            closeOnTouchOutside={false}
            onConfirmPressed={() => {
              hideAlert();
                    }}
                /> */}

            <StatusBar style="auto" />
         </SafeAreaView>
        )
    }
}



