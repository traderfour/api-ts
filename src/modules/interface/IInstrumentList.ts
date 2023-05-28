import {IResponse} from "./IResponse";
import {IInstrument} from "./IInstrument";

export interface IInstrumentList extends IResponse {
    results: IInstrument[];
}