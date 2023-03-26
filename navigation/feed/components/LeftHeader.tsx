import React, { Context, useContext, useEffect } from "react";
import IFeedController from "../../../controllers/feed/interface";
import { ICreateGameInput } from "../../../domain/use-cases/feed/interface";
import { Text, TouchableOpacity } from "react-native";
import { AppContext, IAppContext } from "../../../controllers/provider";
import { FeedStackNavigationProp, FeedStackScreenProps } from "../types";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../../views/styles";


export interface IGameCreator {
    // createGame(input: ICreateGameInput): void
    createGame(): void
}



export default function LeftHeader(){


    const navigation = useNavigation() as FeedStackNavigationProp<'FeedScreen'>
    const context = useContext(AppContext)
    const feedController: IFeedController = context.feedController


    const createGame = (): void => {
        // const input: ICreateGameInput = {
        //     placeId: "",
        //     userProfileId: "",
        //     startingTime: new Date(),
        //     endingTime: new Date()
        // }
        // this.feedController.createGame(input)
        navigation.navigate('CreateGameStack', {})
    }

        return (
            <TouchableOpacity
                onPress={() => {
                    createGame()
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        color: globalStyles.global.logoColor
                    }}
                >
                    Jouer
                </Text>
            </TouchableOpacity>
        )
    
}