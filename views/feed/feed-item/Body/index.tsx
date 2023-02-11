import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"
import React from "react"
import LeftBody from "./Left"
import BodyRightView from "./Right"
import { IBadgeData } from "../../../../app/features/feed/slice/interface"
import IFeedScreen from "../../../../screens/feed/interface"

export interface IBodyContainerProps{
	badgeList: IBadgeData[]
	onBadgeClick: () => void
}


export class Bodyyy extends React.Component<IBodyContainerProps> {

	handleBadgeClick = this.props.onBadgeClick

	constructor(props: IBodyContainerProps) {
		super(props)
		this.onBadgeClick.bind(this)

	}

	onBadgeClick() {
		console.warn(this.props)
		this.handleBadgeClick()
	}
    
	render() {
		return(
		    <View style={styles.container}>
		        <LeftBody 
					onBadgeClick={() => {this.onBadgeClick()}}
					badgeList={this.props.badgeList}
		        />
		        <BodyRightView/>
		    </View>
		)
    }

}


export function Body(props: IBodyContainerProps){



	return(
	    <View style={styles.container}>
	        <LeftBody 
				onBadgeClick={() => {props.onBadgeClick()}}
				badgeList={props.badgeList}
	        />
	        <BodyRightView/>
	    </View>
	)

}