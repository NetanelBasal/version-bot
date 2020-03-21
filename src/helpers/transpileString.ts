import {getPackage} from "./getPackage";
import {HashMap} from "../types";

let paramMap = {
    version: getPackage().version
};

export function addParamValue(newParams: HashMap) {
    paramMap = {
        ...paramMap,
        ...newParams
    };
}

export function transpileString(str: string): string {
    return Object.entries(paramMap).reduce((transpiled, [param, value]) => {
        return transpiled.replace(new RegExp(`{{${param}}}`, 'g'), value);
    }, str);
}