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

    state: S = {
        ...this.state,
        loading: false
    }

    async makeRequest<T>(request: Promise<T>): Promise<T  | void> {
        if(!this.state.loading){
            this.setLoading(true)
            const response = await request.then(response => {
                console.log(`Request response: ${JSON.stringify(response)}`)
                return response
            })
            this.setLoading(false)
            return response
        }
        return
    }


    setLoading(value: boolean) {
        this.setState((prevSate) => ({
            ...prevSate,
            loading: value
        }))
    }
}