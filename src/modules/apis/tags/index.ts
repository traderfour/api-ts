import { list } from "./list";
import { post } from "./post";
import { single } from "./single";
import { ITagList } from "./interface/ITagList";
import { ITag } from "../../interface/ITag";
import { IPostList } from "@traderfour/my-ts/dist/modules/apis/posts/interface/IPostList";

export const tags = () => {
  return {
    list,
    single,
    post,
  };
};

export interface ITagsModule {
  list: (endpoint?: string | undefined) => Promise<ITagList>;
  single: (endpoint?: string | undefined, id?: string) => Promise<ITag>;
  post: (endpoint?: string | undefined, id?: string) => Promise<IPostList>;
}
