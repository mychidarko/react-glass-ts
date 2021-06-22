export interface User {
    [key: string]: any
};

export interface UrlParams {
    [key: string]: string;
};

export interface Obj {
    [key: string]: any
};

export interface EBState {
    hasError: Boolean;
};

export type Dict<T = any> = Record<string, T>;

