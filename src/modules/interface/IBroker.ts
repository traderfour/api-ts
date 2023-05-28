import {IResponse} from "./IResponse";
import {IMarket} from "./IMarket";

export interface IBroker extends IResponse{
    uuid: string;
    name: string;
    logo: string;
    website?: string;
    description?: string;
    is_dealing_desk?: boolean;
    is_stp?: boolean;
    is_ecn?: boolean;
    is_market_maker?: boolean;
    is_ndd?: boolean;
    is_dma?: boolean;
    is_prime_of_prime?: boolean;
    has_swap_free?: boolean;
    has_demo_account?: boolean;
    has_mobile_trading?: boolean;
    has_web_trading?: boolean;
    status?: number;
    markets?: IMarket;
}
