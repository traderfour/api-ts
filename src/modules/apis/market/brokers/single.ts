import {useHeaders, useUrl} from "../../../../core";
import responseHandeling from "../../../../core/responseHandeling";
import {config} from "../../../config";
import {IBroker} from "../../../interface/IBroker";

/**
 * @description list of trading accounts
 * @returns a trading accounts list
 * @default  endpoint is /my/trading/accounts
 * @param endpoint
 * @param id
 */
export const single = async (
    endpoint?: string, id?:string
): Promise<IBroker> => {
    return await fetch(useUrl(endpoint ? endpoint : config.endpoints.market.brokers+id), useHeaders()).then(async (response) => {
        return await responseHandeling(response);
    });
};
