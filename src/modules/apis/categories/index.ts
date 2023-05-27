import {list} from "./list";
import {single} from "./single";
import {posts} from "./posts";

export const categories = () => {
  return {
    list,
    single,
    posts
  };
};
