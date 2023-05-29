import responseHandeling from "../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../core";
import { config } from "../../config";
import { IPostList } from "@traderfour/my-ts/dist/modules/apis/posts/interface/IPostList";

/**
 * @description single trading account
 * @returns a trading account
 * @default  endpoint is /my/trading/accounts/id
 * @param endpoint
 * @param id
 */
export const posts = async (
  endpoint?: string,
  id?: string
): Promise<IPostList> => {
  return await fetch(
    useUrl(endpoint ? endpoint : config.endpoints.tags + id + "/posts/"),
    useHeaders()
  ).then(async (response) => {
    return await responseHandeling(response);
  });
};
