import { IGroupChatList } from "../types";
import initialFeed from "../../feed/data/feed";
import initialUserProfileData from "../../data/userProfile";
import { IGroupChat, IGroupChatMessage } from "../types";



    
export const initialGroupChatMessageList: IGroupChatMessage[] = [
    {
        id: "textMessage1Id",
        author: initialUserProfileData[0],
        content: "Yo qui veut jouer ce weekend?",
    },

    {
        id: "feedItemMessage1ID",
        author: initialUserProfileData[0],
        content: initialFeed[0]
    }
]



const initialGroupChatList: IGroupChatList = {
    items: [
        {
            id: "firstGroupChatId",
            name: "Peps__Ballerz🔥🔥🔥",
            members: initialUserProfileData.slice(0,3),
            conversation: initialGroupChatMessageList
        },
        // {
        //     id: "firstGroupChatId2",
        //     name: "Peps__Ballerz🔥🔥🔥",
        //     members: initialUserProfiles.slice(0,3),
        //     conversation: initialGroupChatMessageList
        // },
        // {
        //     id: "firstGroupChatId3",
        //     name: "Peps__Ballerz🔥🔥🔥",
        //     members: initialUserProfiles.slice(0,3),
        //     conversation: initialGroupChatMessageList
        // },
    ]
}



export default initialGroupChatList 
export {initialGroupChatMessageList as groupChatMessageList}