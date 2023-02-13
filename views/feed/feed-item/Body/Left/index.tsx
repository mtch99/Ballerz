import { View, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"
import React from "react"
import { IBadgeData } from "../../../../../app/features/feed/slice/interface"
import IFeedScreen from "../../../../../screens/feed/interface"

export interface ILeftBodyProps{
  badgeList: IBadgeData[]
  playersNum: number
  onBadgeClick: () => void
}


export default function LeftBodyView(props: ILeftBodyProps) {


	const badgeList = props.badgeList
	const playerNum = props.playersNum
	const handleBadgeClick = props.onBadgeClick
	  
	const onBadgeClick = () => {
		// console.error(this)
		handleBadgeClick()
	}

  		return(

  		    <View style={styles.container}>
  		        <View style={styles.playerNumContainer}>
  		          <Text style={styles.playersNumText}>{props.playersNum}</Text>
  		          <Text style={styles.playersText}>JOUEURS</Text>
  		        </View>
			  	{
					badgeList.length>0?(
						<TouchableOpacity style={styles.badgeNumContainer}
							onPress={() => {
								onBadgeClick()
							}}
						>
							<Text>
								{badgeList[0].symbol?badgeList[0].symbol:233}
							</Text>
       					</TouchableOpacity>
					):(
						<TouchableOpacity style={styles.badgeNumContainer}>
        				    <Text style={styles.badgeNum}>0</Text>
        				    <View style={styles.badgesTextContainer}>
        				      <Text style={styles.badgesText}>badges</Text>
        				    </View>
        				</TouchableOpacity>
					)
				}

  		    </View>
		)


}


function generateBadgeNumView(badgeList: IBadgeData[], onBadgeClick: ILeftBodyProps['onBadgeClick']): JSX.Element {

	if(badgeList.length > 0) {
		return (
			<TouchableOpacity style={styles.badgeNumContainer}
				onPress={() => {
					onBadgeClick()
				}}
			>
				<Text>
					{badgeList[0].symbol?badgeList[0].symbol:233}
				</Text>
       		</TouchableOpacity>
		)
	}

	
	return(
		<TouchableOpacity style={styles.badgeNumContainer}>
            <Text style={styles.badgeNum}>0</Text>
            <View style={styles.badgesTextContainer}>
              <Text style={styles.badgesText}>badges</Text>
            </View>
        </TouchableOpacity>
	)
}