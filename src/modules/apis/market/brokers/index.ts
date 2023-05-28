import {list} from "./list";
import {single} from "./single";
import {platforms} from "./platforms";
import {servers} from "./servers";
import {IBrokerList} from "../../../interface/IBrokerList";
import {IBroker} from "../../../interface/IBroker";
import {IPlatformList} from "../../../interface/IPlatformList";
import {IServerList} from "../../../interface/IServerList";

export const brokers = () => {
    return {
        list,
        single,
        platforms,
        servers,
    }
}

export interface IBrokersModule {
    list: (endpoint?: string | undefined) => Promise<IBrokerList>;
    single: (endpoint?: string | undefined, id?: string) => Promise<IBroker>;
    platforms: (endpoint?: string | undefined, id?: string) => Promise<IPlatformList>;
    servers: (endpoint?: string | undefined, id?: string) => Promise<IServerList>;
}