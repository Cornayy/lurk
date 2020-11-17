import { IRepository } from './IRepository';

export abstract class BaseRepository<T> implements IRepository<T> {
    protected readonly location?: string;
    protected data: T[];

    constructor(location?: string) {
        this.data = [];
        this.location = location;
        this.collect(this.location);
    }

    public all(): T[] {
        return this.data;
    }

    protected abstract collect(location?: string): void;
}
