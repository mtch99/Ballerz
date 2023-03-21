import React from "react";
import { IUserProfileData, IGame, IUserProfile } from "../../../../../domain/use-cases/types";
import { IUserProfileModel } from "../../../../../domain/use-cases/userProfile/interface";
import { useAppSelector } from "../../../../hooks";
import { AppDispatch } from "../../../../store";
import { IGameState } from "../../../place/types";
import { INewUserProfileListActionPayload } from "../../userProfileList/slice/actions";
import { INewUserProfileProfileActionPayload } from "../slice/actions";
import { NEW_USERPROFILELIST } from "../../userProfileList/slice";
import { NEW_USERPROFILE } from "../slice";


interface IUserProfileModelInput {
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector
}

export interface IUserProfileModel extends IUserProfileModel{}


export function createUserProfileModel (modelInput: IUserProfileModelInput): IUserProfileModel {
    const model: IUserProfileModel = {

        onNewUserProfileList(input:  IUserProfileData[]) {
            const  payload: INewUserProfileListActionPayload = {items: input}
            modelInput.dispatchFunc(NEW_USERPROFILELIST(payload))
        },

        onNewUserProfile: (input: IUserProfile) => {
            const payload: INewUserProfileProfileActionPayload = UserProfileModelAdapter.parseUserProfileProfilePayload(input)
            modelInput.dispatchFunc(NEW_USERPROFILE(payload))
        }
    }

    return model
}




class UserProfileModelAdapter {
    static parseUserProfileProfilePayload(input: IUserProfile): INewUserProfileProfileActionPayload {
        return {
            ...input,
            games: this.parseGameList(input.games)
        }
    } 


    private static parseGame(input: IGame): IGameState{
        return {
            ...input,
            startingTime: input.startingTime.toLocaleDateString(),
            endingTime: input.endingTime.toLocaleDateString()
        }
    }

    private static parseGameList(input: IUserProfile['games']): IGameState[]{
        const gameStateList: IGameState[] = []
        for(let game of input){
            gameStateList.push(this.parseGame(game))
        }

        return gameStateList
    }
}

