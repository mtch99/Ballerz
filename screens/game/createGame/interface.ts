import { ICreateGameInput, ICreateGameResult } from "../../../domain/use-cases/feed/interface";

export interface ISelectTimeSlotScreen {
    createGame(): Promise<ICreateGameResult | void>
}