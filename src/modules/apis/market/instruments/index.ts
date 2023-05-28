import {single} from "./single";
import {IInstrument} from "../../../interface/IInstrument";

export const instruments = () => {
    return {
        single
    }
}

export interface IInstrumentsModule {
    single: (endpoint?: string | undefined, id?: string) => Promise<IInstrument>;
}