import { PayloadAction } from "@reduxjs/toolkit";
import IGroupChatMapState from "./interface";
import { INewGroupChatListActionPayload, INewGroupChatMessageActionPayload } from "./actions";
import { IGroupChatState } from "../../types";

export enum GroupChatMapAcctionType {
    NEW_MESSAGE="NEW_MESSAGE",
    NEW_GROUPCHATMAP="NEW_GROUPCHATMAP"
}




type IGroupChatStateMapReducer<PayloadType> = (state: IGroupChatMapState, action: PayloadAction<PayloadType>) => IGroupChatMapState


const newMessageReducer: IGroupChatStateMapReducer<INewGroupChatMessageActionPayload> = (state, action) => {
    
    const groupChatId = action.payload.groupChatId

    const previousState = state[groupChatId]

    if(!previousState){
        return {...state}
    }

    const previousConvo: IGroupChatState['conversation'] = [...previousState.conversation]
    const newConvo: IGroupChatState['conversation'] = [...previousConvo, action.payload.message]
    const newGroupChatState: IGroupChatState = {...state[groupChatId], conversation: newConvo}
 

    const result = {
        ...state,
        [groupChatId]: newGroupChatState
    }

    

    return result
}


const newGroupChatMapReducer: IGroupChatStateMapReducer<INewGroupChatListActionPayload> = (state, action) => {
    return {
        ...action.payload
    }
}


const groupChatMapReducers = {
    NEW_MESSAGE: newMessageReducer,
    NEW_GROUPCHATMAP: newGroupChatMapReducer
}

export default groupChatMapReducers