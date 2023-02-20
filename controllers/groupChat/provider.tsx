import React from "react";
import { IGroupChatListState, IGroupChatRepo, IGroupChatState } from "../../app/features/groupChat/slice/interface";
import IGroupChatController, { IGroupChatContext } from "./interface";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IGroupChatModel, createGroupChatModel } from "../../app/features/groupChat/adapter";
import { selectgroupChatModelState } from "../../app/features/groupChat/slice";
import GroupChatController from ".";



export const GroupChatContext = React.createContext<IGroupChatContext>({
    controller : {} as IGroupChatController,
    groupChatListState: {items: []},
    groupChatRepo: {}
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
    const groupChatRepo: IGroupChatRepo = selector(selectgroupChatModelState).groupChatRepo
    // const selectGroupChatById = (id: string): IGroupChatState | null => {
    //     const groupChat = selector(selectgroupChatModelState).groupChatRepo[id]
    //     if(groupChat) {
    //         return null
    //     }
    //     return groupChat
    // }

    


    const _contextValue: IGroupChatContext = {
        controller,
        groupChatListState,
        groupChatRepo
    }

    return (
        <GroupChatContext.Provider
            value={_contextValue}
        >
            {props.children}
        </GroupChatContext.Provider>
    )

}