import {single} from "./single";
import {instruments} from "./instruments";
import {IServer} from "../../../interface/IServer";
import {IInstrumentList} from "../../../interface/IInstrumentList";

export const servers = () => {
    return {
        single,
        instruments,
    }
}

export interface IServersModule {
    single: (endpoint?: string | undefined, id?: string) => Promise<IServer>;
    instruments: (endpoint?: string | undefined, id?: string) => Promise<IInstrumentList>;
}