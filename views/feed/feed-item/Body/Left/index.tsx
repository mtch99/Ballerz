import { View, Text, TouchableOpacity, FlatList } from "react-native"
import {styles} from "./styles"
import React from "react"
import { IBadgeData } from "../../../../../app/features/feed/slice/interface"
import FriendsThereView from "../../Bottom/FriendsThere"
import { IUserProfileDataState } from "../../../../../app/features/types"

export interface ILeftBodyProps{
  badgeList: IBadgeData[]
  playersNum: number
  onBadgeClick: () => void
  onPress: () => void
  friendsHere: IUserProfileDataState[]
}


export default function LeftBodyView(props: ILeftBodyProps) {


	const badgeList = props.badgeList
	const handleBadgeClick = props.onBadgeClick
	

	const onBadgeClick = () => {
		handleBadgeClick()
	}
	const friendsHere: IUserProfileDataState[] = props.friendsHere

  		return(

  		    <View style={styles.container}>
  		        <TouchableOpacity 
					onPress={props.onPress}
					style={styles.playerNumContainer}
				>
					<View
					>
						<View
							style={{flexDirection: "row", alignItems: "center"}}
						>
							<Text style={styles.playersNumText}>{props.playersNum}</Text>
							<Text style={styles.playersText}>Joueurs</Text>
						</View>
						<FriendsThereView
							friendsHere={friendsHere}
							onPress={props.onPress}
						/>
					</View>
  		        </TouchableOpacity>
				{/* {(props.friendsHere.length>0)?(
					<FriendsThereView
						friendsHere={props.friendsHere}
						onPress={props.onPress}
					/>
				):(
					<></>
				)} */}
  		    </View>
		)


}


function BadgeNumView(props: ILeftBodyProps) {
	const badgeList = props.badgeList

	return (
		<>
			{
			badgeList.length>0?(
				<TouchableOpacity style={styles.badgeNumContainer}
					onPress={() => {
						props.onBadgeClick()
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
		</>
	)
}