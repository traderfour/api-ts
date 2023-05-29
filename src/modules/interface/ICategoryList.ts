import {ICategory} from "./ICategory";
import {IResponse} from "./IResponse";

export interface ICategoryList extends IResponse{
    results: ICategory[];
}
