import {ICategory} from "../../../interface/ICategory";
import {IResponse} from "../../../interface/IResponse";

export interface ICategoryList extends IResponse{
    results: ICategory[];
}
