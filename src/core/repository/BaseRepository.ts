import { IRepository } from './IRepository';

export abstract class BaseRepository<T> implements IRepository<T> {
    private readonly data: T[];

    constructor() {
        this.data = this.collect();
    }

    public all(): T[] {
        return this.data;
    }

    protected abstract collect(): T[];
}
