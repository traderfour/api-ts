import {useHeaders, useUrl} from "../../../../core";
import responseHandeling from "../../../../core/responseHandeling";
import {config} from "../../../config";
import {IInstrument} from "../../../interface/IInstrument";

/**
 * @description single trading account
 * @returns a trading account
 * @default  endpoint is /my/trading/accounts/id
 * @param endpoint
 * @param id
 */
export const single = async (
    endpoint?: string,id?:string
): Promise<IInstrument> => {
    return await fetch(useUrl(endpoint ? endpoint : config.endpoints.market.instruments+id), useHeaders()).then(async (response) => {
        return await responseHandeling(response);
    });
};
