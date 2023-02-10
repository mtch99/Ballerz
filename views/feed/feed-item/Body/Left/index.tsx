import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"
import React from "react"
import { IBadgeData } from "../../../../../app/features/feed/slice/interface"

export interface ILeftBodyProps{
  badgeList: IBadgeData[]
}


export default class LeftBody extends React.Component<ILeftBodyProps> {


	badgeList: IBadgeData[]

  	constructor(props: ILeftBodyProps){
		super(props)
		this.badgeList = props.badgeList
  	}

	componentDidMount(): void {
		// this.badgeList = 
	}
    
  	render() {
  		return(

  		    <View style={styles.container}>
  		        <View style={styles.playerNumContainer}>
  		          <Text style={styles.playersNum}>20</Text>
  		          <Text style={styles.playersText}>joueurs</Text>
  		        </View>
  		        {/* <View style={styles.badgeNumContainer}>
  		          <Text style={styles.badgeNum}>20</Text>
  		          <View style={styles.badgesTextContainer}>
  		            <Text style={styles.badgesText}>badges</Text>
  		          </View>
  		        </View> */}
			  {generateBadgeNumView(this.badgeList)}
  		    </View>

		)
  	}
}


function generateBadgeNumView(badgeList: IBadgeData[]): JSX.Element {

	if(badgeList.length > 0) {
		return (
			<View style={styles.badgeNumContainer}>
				<Text>
					{badgeList[0].symbol?badgeList[0].symbol:233}
				</Text>
       		</View>
		)
	}
	return(
		<View style={styles.badgeNumContainer}>
            <Text style={styles.badgeNum}>0</Text>
            <View style={styles.badgesTextContainer}>
              <Text style={styles.badgesText}>badges</Text>
            </View>
        </View>
	)
}