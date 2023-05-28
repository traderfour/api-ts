import {IMarketList} from "../../../interface/IMarketList";
import {useHeaders, useUrl} from "../../../../core";
import responseHandeling from "../../../../core/responseHandeling";
import {config} from "../../../config";

/**
 * @description list of trading accounts
 * @returns a trading accounts list
 * @default  endpoint is /my/trading/accounts
 * @param endpoint
 */
export const list = async (
    endpoint?: string
): Promise<IMarketList> => {
    return await fetch(useUrl(endpoint ? endpoint : config.endpoints.market.markets), useHeaders()).then(async (response) => {
        return await responseHandeling(response);
    });
};
