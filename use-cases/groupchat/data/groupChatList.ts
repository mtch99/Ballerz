import { IGroupChatList } from "./../types";
import initialFeed from "../../feed/data/feed";
import initialUserProfiles from "../../feed/data/userProfile";
import { IGroupChat, IGroupChatMessage } from "../types";


const initialGroupChatList: IGroupChatList = {
    items: [
        {
            id: "firstGroupChatId",
            name: "Peps__Ballerz🔥🔥🔥",
            members: initialUserProfiles.slice(0,3),
            conversation: []
        },
    ]
}
    


const initialGroupChatMessageList: IGroupChatMessage[] = [
    {
        id: "textMessage1Id",
        author: initialUserProfiles[0],
        content: "Yo qui veut jouer ce weekend?",
    },

    {
        id: "feedItemMessage1ID",
        author: initialUserProfiles[0],
        content: initialFeed[0]
    }
]

export default initialGroupChatList 
export {initialGroupChatMessageList as groupChatMessageList}