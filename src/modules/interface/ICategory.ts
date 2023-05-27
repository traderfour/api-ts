import {IResponse} from "./IResponse";

export interface ICategory extends IResponse{
    uuid: string;
    title: string;
    slug: string;
    icon: string;
    type: number;
}
