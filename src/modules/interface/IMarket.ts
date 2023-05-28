import {IResponse} from "./IResponse";

export interface IMarket extends IResponse{
    uuid: string;
    name: string;
    slug: string;
    icon: string;
    url?: string;
    description?: string;
    cover?: string;
    status?: number;
    parent_id?: string;
    children?: IMarket[];
}
