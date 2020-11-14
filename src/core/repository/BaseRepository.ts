import { IRepository } from './IRepository';

export abstract class BaseRepository<T> implements IRepository<T> {
    protected data: T[];

    constructor() {
        this.data = this.collect();
    }

    public all(): T[] {
        return this.data;
    }

    protected abstract collect(): T[];
}
