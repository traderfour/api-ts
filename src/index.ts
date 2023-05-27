import { config } from "./modules/config";
import {ICategoryList} from "./modules/apis/categories/interface/ICategoryList";
import {ICategory} from "./modules/interface/ICategory";
import {categories} from "./modules/apis/categories";
import {IPostList} from "@traderfour/my-ts/dist/modules/apis/posts/interface/IPostList";

export interface IMyTs {
  config: typeof config;
  categories: {
    list: (endpoint?: string | undefined) => Promise<ICategoryList>;
    single: (endpoint?: string | undefined) => Promise<ICategory>;
    posts: (endpoint?: string | undefined) => Promise<IPostList>;
  }
}

export const myTs = (): IMyTs => {
  return {
    config,
    categories: categories(),
  };
};
