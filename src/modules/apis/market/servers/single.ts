import {IServer} from "../../../interface/IServer";
import {useHeaders, useUrl} from "../../../../core";
import responseHandeling from "../../../../core/responseHandeling";
import {config} from "../../../config";

/**
 * @description single trading account
 * @returns a trading account
 * @default  endpoint is /my/trading/accounts/id
 * @param endpoint
 * @param id
 */
export const single = async (
    endpoint?: string,id?:string
): Promise<IServer> => {
    return await fetch(useUrl(endpoint ? endpoint : config.endpoints.market.servers+id), useHeaders()).then(async (response) => {
        return await responseHandeling(response);
    });
};
