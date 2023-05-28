import {IResponse} from "./IResponse";
import {IMarket} from "./IMarket";
import {IBroker} from "./IBroker";
import {IPlatform} from "./IPlatform";

export interface IServer extends IResponse {
    uuid: string;
    title: string;
    address: string;
    ip_type: number;
    port: number;
    is_offline: boolean;
    is_public: boolean;
    market?: IMarket;
    broker?: IBroker;
    platform?: IPlatform;
}