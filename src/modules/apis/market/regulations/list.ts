import {IRegulation} from "../../../interface/IRegulation";
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
): Promise<IRegulation> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.market.regulations), useHeaders()).then(async (response) => {
    return await responseHandeling(response);
  });
};
