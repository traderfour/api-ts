import {useHeaders, useUrl} from "../../../../core";
import responseHandeling from "../../../../core/responseHandeling";
import {config} from "../../../config";
import {IServerList} from "../../../interface/IServerList";

/**
 * @description list of trading accounts
 * @returns a trading accounts list
 * @default  endpoint is /my/trading/accounts
 * @param endpoint
 * @param id
 */
export const servers = async (
    endpoint?: string, id?:string
): Promise<IServerList> => {
    return await fetch(useUrl(endpoint ? endpoint : config.endpoints.market.markets+id+"/servers"), useHeaders()).then(async (response) => {
        return await responseHandeling(response);
    });
};
