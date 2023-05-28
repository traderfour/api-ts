import {useHeaders, useUrl} from "../../../../core";
import responseHandeling from "../../../../core/responseHandeling";
import {config} from "../../../config";
import {IInstrumentList} from "../../../interface/IInstrumentList";

/**
 * @description single trading account
 * @returns a trading account
 * @default  endpoint is /my/trading/accounts/id
 * @param endpoint
 * @param id
 */
export const instruments = async (
    endpoint?: string,id?:string
): Promise<IInstrumentList> => {
    return await fetch(useUrl(endpoint ? endpoint : config.endpoints.market.servers+id+"/instruments"), useHeaders()).then(async (response) => {
        return await responseHandeling(response);
    });
};
