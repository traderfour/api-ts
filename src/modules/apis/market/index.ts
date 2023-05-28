import {IServersModule, servers} from "./servers";
import {IRegulationsModule, regulations} from "./regulations";
import {IInstrumentsModule, instruments} from "./instruments";
import {IMarketsModule, markets} from "./markets";
import {brokers, IBrokersModule} from "./brokers";
import {IPlatformsModule, platforms} from "./platforms";

export const market = () => {
    return {
        markets: markets(),
        brokers: brokers(),
        regulations: regulations(),
        platforms: platforms(),
        servers: servers(),
        instruments: instruments(),
    }
}

export interface IMarketModule {
    markets: IMarketsModule,
    brokers: IBrokersModule,
    regulations: IRegulationsModule,
    platforms: IPlatformsModule,
    servers: IServersModule,
    instruments: IInstrumentsModule
}