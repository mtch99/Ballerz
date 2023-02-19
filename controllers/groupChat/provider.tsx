import React from "react";
import { IGroupChatListState, IGroupChatState } from "../../app/features/groupChat/slice/interface";
import IGroupChatController from "./interface";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IGroupChatModel, createGroupChatModel } from "../../app/features/groupChat/adapter";
import { selectgroupChatModelState } from "../../app/features/groupChat/slice";
import GroupChatController from ".";



export interface IGroupChatContext {
    controller: IGroupChatController
    groupChatListState: IGroupChatListState
    selectGroupChatById(id: string): IGroupChatState | null
}


export const GroupChatContext = React.createContext<IGroupChatContext>({
    controller : {} as IGroupChatController,
    groupChatListState: {items: []},
    selectGroupChatById: (id: string) => (null)
})


interface IProps {
    navigation: any
    children: JSX.Element
}



export default function GroupChatProvider (props: IProps) {

    const selector = useAppSelector
    const dispatch = useAppDispatch()

    const groupChatModel: IGroupChatModel = createGroupChatModel({
        dispatchFunc: dispatch,
        selectorFunc: selector
    })
    const controller = new GroupChatController(groupChatModel)
    const groupChatListState: IGroupChatListState = selector(selectgroupChatModelState).groupChatList
    
    const selectGroupChatById = (id: string): IGroupChatState | null => {
        const groupChat = selector(selectgroupChatModelState).groupChatRepo.get(id)
        if(!groupChat) {
            return null
        }
        return groupChat
    }


    const _contextValue: IGroupChatContext = {
        controller,
        groupChatListState,
        selectGroupChatById
    }

    return (
        <GroupChatContext.Provider
            value={_contextValue}
        >
            {props.children}
        </GroupChatContext.Provider>
    )

}