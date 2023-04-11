import React from "react"
import { IUserProfileData } from "../domain/use-cases/types"

export interface ISelectableUserProfileData extends IUserProfileData {
    selected: boolean
}



export interface IUserProfileListViewProps {
    usersList: IUserProfileData[]
    onPressUserProfile(item: IUserProfileData): void
}

export interface IScreenState {
    loading: boolean
}

export class Screen<P = any, S extends IScreenState = IScreenState> extends React.Component<P, S> {

    async makeRequest<I, O>(input: I, callback: (input: I) => Promise<O>): Promise<O | null> {
        if(!this.state.loading){
            const outPut = await callback(input).then(res => {
                this.setLoading(false)
                return res
            })
            return outPut
        }
        return null
    }

    async makeRequest__<T>(request: Promise<T>): Promise<T  | void> {
        if(!this.state.loading){
            const response = await request.then(response => {
                this.setLoading(false)
                return response
            })
            return response
        }
        return
    }


    setLoading(value: boolean) {
        this.setState((prevState) => ({
            ...prevState,
            loading: value
        }))
    }
}