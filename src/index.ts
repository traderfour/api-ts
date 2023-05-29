import { config } from "./modules/config";
import { categories, ICategoryModule } from "./modules/apis/categories";
import { tags, ITagsModule } from "./modules/apis/tags";
import { myTs, IMyTs } from "@traderfour/my-ts";
import { IMarketModule, market } from "./modules/apis/market";

export interface IApiTs {
  config: typeof config;
  categories: ICategoryModule;
  market: IMarketModule;
  tags: ITagsModule;
  myTs: IMyTs;
}

export const apiTS = (): IApiTs => {
  return {
    config,
    categories: categories(),
    market: market(),
    tags: tag(),
    myTs: myTs(),
  };
};
