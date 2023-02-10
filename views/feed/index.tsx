import React from "react";
import {FlatList, SafeAreaView } from "react-native";
import { IFeedState } from "../../app/features/feed/slice/interface";
import FeedItemView from "./feed-item/index";


interface IProps {
    feedState: IFeedState
}


class FeedView extends React.Component<IProps> {

    componentDidMount(): void {
        
    }
  
    // render(){
    //     return (
    //         <View style={styles.container}>
    //           <View style={styles.rectStack}>
    //             <View style={styles.rect}>
    //               <View style={styles.rect3Stack}>
    //                 <View style={styles.rect3}>
    //                   <Text style={styles.loremIpsum}>20</Text>
    //                 </View>
    //                 <View style={styles.rect4}>
    //                   <View style={styles.rect5}>
    //                     <Text style={styles.joueurs}>joueurs</Text>
    //                     <View style={styles.loremIpsum2Row}>
    //                       <Text style={styles.loremIpsum2}>0</Text>
    //                       <Text style={styles.badges}>badges</Text>
    //                     </View>
    //                   </View>
    //                 </View>
    //                 <View style={styles.rect10}>
    //                   <View style={styles.iconRow}>
    //                     <FeatherIcon
    //                       name="user-check"
    //                       style={styles.icon}
    //                     ></FeatherIcon>
    //                     <FontAwesomeIcon
    //                       name="comment-o"
    //                       style={styles.icon1}
    //                     ></FontAwesomeIcon>
    //                     <MaterialIconsIcon
    //                       name="group"
    //                       style={styles.icon2}
    //                     ></MaterialIconsIcon>
    //                   </View>
    //                 </View>
    //               </View>
    //             </View>
    //             <View style={styles.rect2}>
    //               <Text style={styles.byfarCentreSportif}>Byfar centre sportif</Text>
    //             </View>
    //             <View style={styles.rect6}>
    //               <Text style={styles.mardi1207}>mardi 12/07</Text>
    //               <View style={styles.rect7StackRow}>
    //                 <View style={styles.rect7Stack}>
    //                   <View style={styles.rect7}></View>
    //                   <Text style={styles.loremIpsum3}>15:00</Text>
    //                 </View>
    //                 <Text style={styles.loremIpsum5}>-</Text>
    //                 <View style={styles.rect9}>
    //                   <Text style={styles.loremIpsum7}>18:00</Text>
    //                 </View>
    //               </View>
    //             </View>
    //           </View>
    //           <Text>{JSON.stringify(this.props.feedState)}</Text>
    //         </View>
    //     )
    // }


    render(): React.ReactNode {
		return(
			<SafeAreaView>
				<FlatList
					data={this.props.feedState.items}
					renderItem={({item, index}) => {
						return(
							<FeedItemView
								feedItem={item}
							/>
						)
					}}
					extraData={this.props.feedState.items}
				/>
        {/** This component is used to test that the feedView renders correctly */}
				{/* <FeedItemView
					feedItem={this.props.feedState.items[0]}
				/> */}
			</SafeAreaView>
		)
    }
}


export default FeedView;
