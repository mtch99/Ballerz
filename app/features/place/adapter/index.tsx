import React from "react";
import { useAppSelector } from "../../../hooks";
import { IPlaceModelEventListener } from "../../../../use-cases/place/interface";
import { IPlace, IFeedItem } from "../../../../use-cases/types";
import { AppDispatch } from "../../../store";
import { IFeedItemState } from "../../feed/slice/interface";
import { NEW_PLACELIST, PlaceListSlice } from "../placeList/slice";
import { NEW_PLACEPROFILE, PlaceMapSlice } from "../placeMap/slice";
import { IPlaceListState, IPlaceMapState, IPlaceListItemState } from "../types";
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

        onNewPlaceList(input:  IPlace[]) {
            const  payload: INewPlaceListActionPayload = {items: input}
            modelInput.dispatchFunc(NEW_PLACELIST(payload))
        },

        onNewPlaceProfile: (input: IPlaceProfile) => {
            const payload: INewPlaceProfileActionPayload = input
            modelInput.dispatchFunc(NEW_PLACEPROFILE(payload))
        }
    }

    return model
}