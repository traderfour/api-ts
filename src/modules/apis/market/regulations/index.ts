import {list} from "./list";
import {IRegulation} from "../../../interface/IRegulation";

export const regulations = () => {
    return {
        list,
    }
}

export interface IRegulationsModule {
    list: (endpoint?: string | undefined) => Promise<IRegulation>;
}