import { IRepository } from '../interface/IRepository';

export abstract class BaseRepository<T> implements IRepository<T> {
    protected readonly location?: string;
    protected readonly data: T[] = [];

    constructor(location?: string) {
        this.location = location;
        this.collect(location);
    }

    public all(): T[] {
        return this.data;
    }

    protected abstract collect(location?: string): void;
}
