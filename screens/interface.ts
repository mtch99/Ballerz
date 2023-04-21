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
            const response = await request.then(response => {
                this.setLoading(false)
                console.error(`Request response: ${JSON.stringify(response)}`)
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