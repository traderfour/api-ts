import {list} from "./list";
import {single} from "./single";
import {posts} from "./posts";
import {ICategoryList} from "./interface/ICategoryList";
import {ICategory} from "../../interface/ICategory";
import {IPostList} from "@traderfour/my-ts/dist/modules/apis/posts/interface/IPostList";

export const categories = () => {
  return {
    list,
    single,
    posts
  };
};

export interface ICategoryModule {
  list: (endpoint?: string | undefined) => Promise<ICategoryList>;
  single: (endpoint?: string | undefined) => Promise<ICategory>;
  posts: (endpoint?: string | undefined) => Promise<IPostList>;
}
