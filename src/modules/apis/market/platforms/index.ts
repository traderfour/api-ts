import {list} from "./list";
import {IPlatformList} from "../../../interface/IPlatformList";

export const platforms = () => {
    return {
        list,
    }
}

export interface IPlatformsModule {
    list: (endpoint?: string | undefined) => Promise<IPlatformList>;
}