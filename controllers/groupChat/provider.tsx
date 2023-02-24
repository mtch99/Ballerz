import React from "react";
import { IGroupChatListState, IGroupChatRepo, IGroupChatState } from "../../app/features/groupChat/groupChatList/slice/interface";
import IGroupChatController, { IGroupChatContext } from "./interface";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IGroupChatModel, createGroupChatModel } from "../../app/features/groupChat/adapter";
import { selectgroupChatModelState } from "../../app/features/groupChat/groupChatList/slice";
import GroupChatController from ".";
import { selectGroupChatMapState } from "../../app/features/groupChat/groupChatMap/slice";
import IGroupChatMapState from "../../app/features/groupChat/groupChatMap/slice/interface";



export const GroupChatContext = React.createContext<IGroupChatContext>({
    controller : {} as IGroupChatController,
    groupChatList: {items: []},
    groupChatMap: {}
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
    const groupChatListState: IGroupChatListState = selector(selectgroupChatModelState).groupChatList
    const controller = new GroupChatController(groupChatModel, groupChatListState)
    const groupChatMap: IGroupChatMapState = selector(selectGroupChatMapState)


    const _contextValue: IGroupChatContext = {
        controller,
        groupChatList: groupChatListState,
        groupChatMap: groupChatMap
    }

    return (
        <GroupChatContext.Provider
            value={_contextValue}
        >
            {props.children}
        </GroupChatContext.Provider>
    )

}