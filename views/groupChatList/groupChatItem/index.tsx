import React from "react"
import { IGroupChatMessageState, IGroupChatState } from "../../../app/features/groupChat/groupChatList/slice/interface"
import { TouchableOpacity, View, Text } from "react-native"
import {Image, StyleSheet} from "react-native";
import { IGroupChatItemViewProps } from "../interface"
import { IFeedItem } from "../../../use-cases/types";
import { IFeedItemState } from "../../../app/features/feed/slice/interface";





export class GroupChatItemView extends React.Component<IGroupChatItemViewProps>{

    groupChat = this.props.groupChat
    
    constructor(props: IGroupChatItemViewProps) {
        super(props)
    }


    onPressGroupChat() {
        this.props.onPressGroupChat()
    }

    render(): React.ReactNode {
        const lastMessage = lastMessageView(this.groupChat.conversation.length>0?this.groupChat.conversation[this.groupChat.conversation.length - 1]:undefined)
        return (
            <TouchableOpacity style = {styles.container} onPress={() => {this.onPressGroupChat()}}>
		    	{/* <Image style = {stylesheet.style_Ellipse_8} source = {{uri:'https://reactnative.dev/img/tiny_logo.png'}}/> */}
                <Image style = {styles.groupPhoto} source = {require("../../../assets/groupPhoto.png")}/>

		    	<View style = {styles.infoContainer}>
                    <View style={styles.infoContainerHeader}>
                        <Text style = {styles.groupNameText}>
                            {this.groupChat.name}
                        </Text>
                        {/* <View style={styles2.unreadNumContainer}>
                            <Text style = {styles2.unreadNumText}>
                                2
                            </Text>
                        </View> */}
                    </View>


                    <View style = {styles.lastMessageContainer}>
                        {
                            this.groupChat.conversation.length>0?(
                                <></>
                            ):(
                                <></>
                            )
                        }
                        {lastMessage}
                    </View>
		    	</View>
		    </TouchableOpacity>
        )

        // return tempView({onPressGroupChat: this.onPressGroupChat})

    }
}


export function lastMessageView(message?: IGroupChatMessageState): React.ReactNode{
	let lastMessageText: string | IFeedItemState
	let authorUsername: string | undefined = undefined
	if(message){
		lastMessageText = message.content
		authorUsername = message.author.username
	}
	else{
		lastMessageText = 'Lancez la conversation'
	}
    
    if(authorUsername){
		if(typeof lastMessageText === 'string'){
			return (
				<>
					<Text style={styles.lastMessageAuthorText}>
						{authorUsername}
					</Text>
					<Text style={styles.lastMessageText}>
							{lastMessageText}
					</Text>
				</>
			)
		} else {
        	return (
        	    <Text style = {{...styles.lastMessageText, fontWeight: 'bold'}}>
        	        Nouvelle invitation!! 
        	    </Text>
        	)
		}
    } else if (typeof lastMessageText === 'string') {
		return(
			<Text style={styles.lastMessageText}>
						{lastMessageText}
			</Text>
		)
	}
}


const styles = StyleSheet.create({
    container: {
        marginTop: 3,
		// width: 321,
		height: 54,
		backgroundColor: "rgba(0,0,0,0)",
        flexDirection: "row",
        marginBottom: 20
	},

    groupPhoto: {
		width: 50,
		height: 50,
		borderRadius: 1000,
		backgroundColor: "rgba(0,0,0,0)",
	},

    infoContainer: {
        flexDirection: 'column',
        flexGrow: 1,
        paddingHorizontal: 12
    },

    infoContainerHeader: {
        flexDirection: 'row',
        height: 27,
        marginRight: 5,
    },

    lastMessageContainer: {
        flexDirection: 'row',
    },

    groupNameText: {
        color: 'white',
        overflow: 'hidden',
        maxWidth: '80%',
        fontSize: 21,
        fontWeight: '500',
    },

    unreadNumContainer: {
        width: 15,
        height: 15,
        borderRadius: 999,
        backgroundColor: '#55A99D',
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10
    },

    unreadNumText: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold'
    },

    lastMessageAuthorText: {
        // color: '#55A99D',
        color: 'white',
        fontStyle: 'italic',
        // fontWeight: '300',
        fontSize: 16
    },

    lastMessageText: {
        // color: '#55A99D',
        color: 'white',
        // fontWeight: 'bold',
        fontSize: 16,
    }
})
