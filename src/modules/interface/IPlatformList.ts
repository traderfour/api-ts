import {IResponse} from "./IResponse";
import {IPlatform} from "./IPlatform";

export interface IPlatformList extends IResponse {
    results: IPlatform[];
}