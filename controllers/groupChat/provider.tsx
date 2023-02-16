import React from "react";
import { IGroupChatListState } from "../../app/features/groupChat/slice/interface";
import IGroupChatController from "./interface";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IGroupChatModel, createGroupChatModel } from "../../app/features/groupChat/adapter";
import { selectgroupChat } from "../../app/features/groupChat/slice";
import GroupChatController from ".";



export interface IGroupChatContext {
    controller: IGroupChatController
    groupChatListState: IGroupChatListState
}


export const GroupChatContext = React.createContext<IGroupChatContext>({
    controller : {} as IGroupChatController,
    groupChatListState: {items: []}
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
    const groupChatListState: IGroupChatListState = selector(selectgroupChat)


    const _contextValue: IGroupChatContext = {
        controller,
        groupChatListState
    }

    return (
        <GroupChatContext.Provider
            value={_contextValue}
        >
            {props.children}
        </GroupChatContext.Provider>
    )

}