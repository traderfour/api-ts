import { IConfig } from "./interface/Config";
import {myTs} from "@traderfour/my-ts";
/**
 * @description Set Base URL and other configs
 * @returns your base URL is Set and other configs added
 */
export let config: IConfig = {
  baseURL: "https://api.trader4.net",
  headers: {},
  apiVersion: "v1",
  authorization: "Authorization",
  endpoints: {
    categories: "/categories/",
    tags: "/tags/",
    market: {
        markets: "/market/markets/",
        regulations: "/market/regulations/",
        brokers: "/market/brokers/",
        platforms: "/market/platforms/",
        servers: "/market/servers/",
        instruments: "/market/instruments/",
    },
    my: myTs().config.endpoints,
  },
};
