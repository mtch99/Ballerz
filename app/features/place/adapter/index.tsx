import React from "react";
import { useAppSelector } from "../../../hooks";
import { IPlaceModelEventListener } from "../../../../use-cases/place/interface";
import { IPlaceData, IFeedItem, IGame } from "../../../../use-cases/types";
import { AppDispatch } from "../../../store";
import { IFeedItemState } from "../../feed/slice/interface";
import { NEW_PLACELIST, PlaceListSlice } from "../placeList/slice";
import { NEW_PLACEPROFILE, PlaceMapSlice } from "../placeMap/slice";
import { IPlaceListState, IPlaceMapState, IPlaceListItemState, IGameState } from "../types";
import { IPlaceProfile } from "../../../../use-cases/place/types";
import { INewPlaceProfileActionPayload } from "../placeMap/slice/actions";
import { INewPlaceListActionPayload } from "../placeList/slice/actions";


interface IPlaceModelInput {
    dispatchFunc: AppDispatch
    selectorFunc: typeof useAppSelector
}

export interface IPlaceModel extends IPlaceModelEventListener{}


export function createPlaceModel (modelInput: IPlaceModelInput): IPlaceModel {
    const model: IPlaceModel = {

        onNewPlaceList(input:  IPlaceData[]) {
            const  payload: INewPlaceListActionPayload = {items: input}
            modelInput.dispatchFunc(NEW_PLACELIST(payload))
        },

        onNewPlaceProfile: (input: IPlaceProfile) => {
            const payload: INewPlaceProfileActionPayload = PlaceModelAdapter.parsePlaceProfilePayload(input)
            modelInput.dispatchFunc(NEW_PLACEPROFILE(payload))
        }
    }

    return model
}




class PlaceModelAdapter {
    static parsePlaceProfilePayload(input: IPlaceProfile): INewPlaceProfileActionPayload {
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

    private static parseGameList(input: IPlaceProfile['games']): IGameState[]{
        const gameStateList: IGameState[] = []
        for(let game of input){
            gameStateList.push(this.parseGame(game))
        }

        return gameStateList
    }
}


export function parseGame(game: IGame): IGameState{
    return {
        ...game,
        startingTime: game.startingTime.toLocaleDateString(),
        endingTime: game.endingTime.toLocaleDateString()
    }
}

export function parseGameList(gameList: IGame[]): IGameState[]{
    const result: IGameState[] = []

    if(gameList.length > 0){
        for(let game of gameList){
            result.push(parseGame(game))
        }
    }

    return result
}
