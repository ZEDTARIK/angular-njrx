import { DataStateEnum } from './DataStateEnum';

export interface AppDataState <T> {
    dataState?: DataStateEnum;
    data?: T;
    errorMessage?: string;
}
