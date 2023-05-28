import { config } from "./modules/config";
import {ICategoryList} from "./modules/apis/categories/interface/ICategoryList";
import {ICategory} from "./modules/interface/ICategory";
import {categories} from "./modules/apis/categories";
import {IPostList} from "@traderfour/my-ts/dist/modules/apis/posts/interface/IPostList";
import {myTs, IMyTs} from "@traderfour/my-ts";

export interface IApiTs {
  config: typeof config;
  categories: {
    list: (endpoint?: string | undefined) => Promise<ICategoryList>;
    single: (endpoint?: string | undefined) => Promise<ICategory>;
    posts: (endpoint?: string | undefined) => Promise<IPostList>;
  },
  myTs: IMyTs;
}

export const apiTS = (): IApiTs => {
  return {
    config,
    categories: categories(),
    myTs: myTs()
  };
};
