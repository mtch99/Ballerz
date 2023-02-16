import React from "react";
import { useAppSelector } from "../../../hooks";
import { IFeed, IFeedItem } from "../../../../use-cases/feed/types";
import { NEW_GROUPCHATLIST } from "../slice";
import { IGroupChatState, IGroupChatListState } from "../slice/interface";
import { useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { INewGroupChatListActionPayload } from "../slice/actions";
import groupChatReducers from "../slice/reducers";
import { IGroupChatList } from "../../../../use-cases/groupchat/types";
import { IGroupChatModelEventListener } from "../../../../use-cases/groupchat/interface";


interface IGroupChatModelInput {
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector
}

interface IGroupChatModel extends IGroupChatModelEventListener{}


export function createGroupChatModel (input: IGroupChatModelInput): IGroupChatModel {
    const model : IGroupChatModel = {
        newGroupChatListEventHandler: (groupChatList: IGroupChatList) => {
            const payload: INewGroupChatListActionPayload = groupChatList
            input.dispatchFunc(NEW_GROUPCHATLIST(payload))
        }
    }

    return model
}
