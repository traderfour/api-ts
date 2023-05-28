import {IResponse} from "./IResponse";
import {IServer} from "./IServer";
import {IBroker} from "./IBroker";
import {IPlatform} from "./IPlatform";

export interface IInstrument extends IResponse {
    uuid: string;
    name: string;
    slug: string;
    logo: string;
    description: string;
    sector: number;
    industry: number;
    digits: number;
    contract_size: number;
    spread: number;
    stop_level: number;
    margin_currency: string;
    profit_currency: string;
    calculation_mode: number;
    tick_size: string;
    tick_value: number;
    chart_mode: number;
    margin_rate: any;
    swap_rate: any;
    sessions: any;
    max_leverage: any;
    min_lot_size: any;
    max_lot_size: any;
    commission: any;
    commission_calculation_mode: any;
    status: number;
    server: IServer;
    broker: IBroker;
    platform: IPlatform;
}