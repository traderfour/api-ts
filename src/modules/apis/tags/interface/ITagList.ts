import { IResponse } from "../../../interface/IResponse";
import { ITag } from "../../../interface/ITag";

export interface ITagList extends IResponse {
  results: ITag[];
}
