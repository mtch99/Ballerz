import { View, Text, TouchableOpacity, FlatList } from "react-native"
import {styles} from "./styles"
import React from "react"
import { IBadgeData } from "../../../../../../app/features/feed/slice/interface"

export interface ILeftBodyProps{
  badgeList: IBadgeData[]
  playersNum: number
  onBadgeClick: () => void
}


export default function LeftBodyView(props: ILeftBodyProps) {


	const badgeList = props.badgeList
	const handleBadgeClick = props.onBadgeClick
	

	const onBadgeClick = () => {
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
							<Text
								style={{color: "#AAB8C2"}}
							>
								badges:
							</Text>
							<FlatList
								data={badgeList}
								renderItem={({item, index}) => {
										return(
											<Text>
												{item.symbol}
											</Text>
										)
								}}
								style={{flexDirection: "row"}}
							/>
							{/* <Text>
								{badgeList[0].symbol?badgeList[0].symbol:233}
							</Text> */}
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