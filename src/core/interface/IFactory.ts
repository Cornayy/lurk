import { Context } from '../context/Context';

export interface IFactory<T> {
    create(input?: string, context?: Context): T;
}
