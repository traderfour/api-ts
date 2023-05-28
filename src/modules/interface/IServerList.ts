import {IResponse} from "./IResponse";
import {IServer} from "./IServer";

export interface IServerList extends IResponse {
    results: IServer[];
}