import React, { Context } from "react";
import IFeedController from "../../../controllers/feed/interface";
import { ICreateGameInput } from "../../../use-cases/feed/interface";
import { Text, TouchableOpacity } from "react-native";
import { AppContext, IAppContext } from "../../../controllers/provider";


export interface IGameCreator {
    // createGame(input: ICreateGameInput): void
    createGame(): void
}



export default class LeftHeader extends React.Component implements IGameCreator {


    static contextType: Context<IAppContext> = AppContext
    context: IAppContext = {} as IAppContext
    feedController: IFeedController = {} as IFeedController


    componentDidMount(): void {
        this.feedController = this.context.feedController
    }

    createGame(): void {
        const input: ICreateGameInput = {
            placeId: "",
            userProfileId: "",
            startingTime: new Date(),
            endingTime: new Date()
        }
        this.feedController.createGame(input)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.createGame()
                }}
            >
                <Text
                    style={{
                        fontSize: 24,
                        color: "E78B2F"
                    }}
                >
                    Jouer
                </Text>
            </TouchableOpacity>
        )
    }
    
}