import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"
import React from "react"
import LeftBodyView from "./Left"
import BodyRightView from "./Right"
import { IBadgeData } from "../../../../app/features/feed/slice/interface"
import IFeedScreen from "../../../../screens/feed/interface"
import { IUserProfileDataState } from "../../../../app/features/types"

export interface IBodyContainerProps{
	badgeList: IBadgeData[]
	playerNum: number
	onBadgeClick: () => void
	startingDateTime: string
	endingDateTime: string
	onPressPlayersNum: () => void
	friendsHere: IUserProfileDataState[]
}


export function BodyView(props: IBodyContainerProps){

	return(
	    <View style={styles.container}>
	        <LeftBodyView 
				playersNum={props.playerNum}
				onBadgeClick={() => {props.onBadgeClick()}}
				badgeList={props.badgeList}
				onPress={props.onPressPlayersNum}
				friendsHere={props.friendsHere}
	        />
			<BodyRightView
                startingDateTime={props.startingDateTime}
				endingDateTime={props.endingDateTime}
			/>
	    </View>
	)
}