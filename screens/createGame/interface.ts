import { ICreateGameInput, ICreateGameOutput } from "../../domain/use-cases/feed/interface";

export interface ISelectTimeSlotScreen {
    createGame(): Promise<ICreateGameOutput>
}