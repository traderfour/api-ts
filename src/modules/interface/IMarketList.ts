import {IResponse} from "./IResponse";
import {IMarket} from "./IMarket";

export interface IMarketList extends IResponse {
    results: IMarket[];
}