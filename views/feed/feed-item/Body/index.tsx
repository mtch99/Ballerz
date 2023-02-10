import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"
import React from "react"
import LeftBody from "./Left"
import BodyRightView from "./Right"
import { IBadgeData } from "../../../../app/features/feed/slice/interface"

export interface IActionContainerProps{
	badgeList: IBadgeData[]
}


export class Body extends React.Component<IActionContainerProps> {
    

	render() {
		return(
		    <View style={styles.container}>
		        <LeftBody 
					badgeList={this.props.badgeList}
		        />
		        <BodyRightView/>
		    </View>
		)
    }

}