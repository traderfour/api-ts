import {list} from "./list";
import {single} from "./single";
import {platforms} from "./platforms";
import {IMarketList} from "../../../interface/IMarketList";
import {IMarket} from "../../../interface/IMarket";
import {IPlatformList} from "../../../interface/IPlatformList";

export const markets = () => {
    return {
        list,
        single,
        platforms
    }
}

export interface IMarketsModule {
    list: (endpoint?: string | undefined) => Promise<IMarketList>;
    single: (endpoint?: string | undefined, id?: string) => Promise<IMarket>;
    platforms: (endpoint?: string | undefined, id?: string) => Promise<IPlatformList>;
}