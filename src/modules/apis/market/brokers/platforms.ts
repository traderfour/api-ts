import {useHeaders, useUrl} from "../../../../core";
import responseHandeling from "../../../../core/responseHandeling";
import {config} from "../../../config";
import {IPlatformList} from "../../../interface/IPlatformList";

/**
 * @description list of trading accounts
 * @returns a trading accounts list
 * @default  endpoint is /my/trading/accounts
 * @param endpoint
 * @param id
 */
export const platforms = async (
    endpoint?: string, id?:string
): Promise<IPlatformList> => {
    return await fetch(useUrl(endpoint ? endpoint : config.endpoints.market.brokers+id+"/platforms"), useHeaders()).then(async (response) => {
        return await responseHandeling(response);
    });
};
