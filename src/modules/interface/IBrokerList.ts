import {IResponse} from "./IResponse";
import {IBroker} from "./IBroker";

export interface IBrokerList extends IResponse{
    results: IBroker[];
}
