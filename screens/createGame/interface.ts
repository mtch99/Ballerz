import { ICreateGameInput, ICreateGameOutput } from "../../use-cases/feed/interface";

export interface ISelectTimeSlotScreen {
    createGame(): Promise<ICreateGameOutput>
}