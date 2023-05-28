import {IResponse} from "./IResponse";

export interface IPlatform extends IResponse{
    uuid: string;
    title: string;
    slug: string;
    icon: string;
    cover: string;
    status: number;
}
